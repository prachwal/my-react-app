// server.cjs
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const chokidar = require("chokidar");
const express = require("express");
const mongoose = require("mongoose");
const { fileURLToPath } = require("url");
const mime = require("mime-types");

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, "../certs/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "../certs/server.crt")),
  ca: fs.readFileSync(path.join(__dirname, "../certs/rootCA.crt")),
  requestCert: true, // Żądamy certyfikatu, ale nie wymagamy go globalnie
  rejectUnauthorized: false, // Nie odrzucamy połączeń bez certyfikatu
};

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../logs/access.log"),
  { flags: "a" },
);

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";

mongoose
  .connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

async function ensureDatabaseExists() {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    const ExampleSchema = new mongoose.Schema({ name: String });
    const ExampleModel = mongoose.model("Example", ExampleSchema);
    await ExampleModel.create({ name: "Initial Document" });
    console.log("Example document created, database is set up.");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

ensureDatabaseExists();

app.use(
  express.static(path.join(__dirname, "../dist"), {
    index: ["index.html", "index.htm"],
    setHeaders: (res, filePath) => {
      const mimeType = mime.lookup(filePath);
      if (mimeType) {
        res.setHeader("Content-Type", mimeType);
      }
    },
  }),
);

const handlersDir = path.join(__dirname, "handlers");
let handlers = {};

async function loadHandlers() {
  handlers = {};
  try {
    const files = fs.readdirSync(handlersDir);
    for (const file of files) {
      if (file.endsWith(".cjs")) {
        // Zmiana z .js na .cjs
        const moduleName = file.replace("Handler.cjs", "").toLowerCase(); // Zmiana z .js na .cjs
        const fullPath = path.join(handlersDir, file);
        const module = await import(fullPath);
        handlers[moduleName] = module.default; // Używamy default dla zgodności z importem
        console.log(`[INFO] Loaded handler for /${moduleName}`);
      }
    }
  } catch (err) {
    console.error("[ERROR] Error loading handlers:", err);
  }
}

loadHandlers();

app.use(morgan("combined", { stream: accessLogStream }));

app.use((req, res, next) => {
  const urlPath = req.url
    .split("?")[0]
    .toLowerCase()
    .replace(/^\/|\/$/g, "");
  const handler = handlers[urlPath];

  if (handler) {
    try {
      handler(req, res);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Internal Server Error");
      console.error(`[ERROR] Error in handler for /${urlPath}:`, err);
    }
  } else {
    next();
  }
});

const httpsServer = https.createServer(options, app);

const httpServer = http.createServer((req, res) => {
  const host = req.headers.host || "localhost";
  const redirectUrl = `https://${host}${req.url}`;
  res.writeHead(301, { Location: redirectUrl });
  res.end();
});

const HTTPS_PORT = 443;
const HTTP_PORT = 80;

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`[INFO] HTTPS Server running on port ${HTTPS_PORT}`);
});

httpServer.listen(HTTP_PORT, () => {
  console.log(
    `[INFO] HTTP Server running on port ${HTTP_PORT} (redirecting to HTTPS)`,
  );
});

// Monitorowanie zmian w folderze handlers dla plików .cjs
chokidar
  .watch(handlersDir, { persistent: true })
  .on("change", async (filePath) => {
    if (filePath.endsWith(".cjs")) {
      // Sprawdzamy tylko pliki .cjs
      console.log(
        `[INFO] Detected change in ${filePath}, reloading handler...`,
      );
      try {
        const moduleName = path
          .basename(filePath, ".cjs") // Zmiana z .js na .cjs
          .replace("Handler", "")
          .toLowerCase();
        const module = await import(filePath);
        handlers[moduleName] = module.default; // Używamy default dla zgodności
        console.log(`[INFO] Reloaded handler for /${moduleName}`);
      } catch (err) {
        console.error(`[ERROR] Failed to reload handler ${filePath}:`, err);
      }
    }
  });
