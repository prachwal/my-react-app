const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const chokidar = require("chokidar");
const express = require("express");
const mongoose = require("mongoose");
const mime = require("mime-types");

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, "../../certs/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "../../certs/server.crt")),
  ca: fs.readFileSync(path.join(__dirname, "../../certs/rootCA.crt")),
  requestCert: true,
  rejectUnauthorized: false,
};

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../../logs/access.log"),
  { flags: "a" },
);

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";
console.log("[DEBUG] Używany URI MongoDB:", mongoUri);

if (!global.mongooseConnection) {
  console.log("[DEBUG] Inicjalizacja połączenia z MongoDB...");
  global.mongooseConnection = mongoose
    .connect(mongoUri)
    .then((m) => {
      console.log("[DEBUG] Połączono z MongoDB!");
      return m.connection;
    })
    .catch((err) => {
      console.error("[ERROR] Błąd połączenia z MongoDB:", err);
      throw err;
    });
}

app.use(express.json());
app.use(
  express.static(path.join(__dirname, "../../dist"), {
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

const predefinedMappings = {
  example: "/api/example",
};

app.use(morgan("combined", { stream: accessLogStream }));

async function loadHandlers() {
  handlers = {};
  try {
    const files = fs.readdirSync(handlersDir);
    for (const file of files) {
      if (file.endsWith(".cjs")) {
        const moduleName = file.replace("Handler.cjs", "").toLowerCase();
        const fullPath = path.join(handlersDir, file);
        delete require.cache[require.resolve(fullPath)];
        const module = require(fullPath);
        const handlerPath = predefinedMappings[moduleName] || `/${moduleName}`;
        handlers[handlerPath] = module;
        console.log(`[INFO] Loaded handler for ${handlerPath}`);
      }
    }
  } catch (err) {
    console.error("[ERROR] Error loading handlers:", err);
  }
}

loadHandlers();

app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    console.log(`[RESPONSE] ${res.statusCode} ${res.statusMessage}`);
    originalSend.call(this, body);
  };
  next();
});

app.use((req, res, next) => {
  const urlPath = req.path.toLowerCase();
  const handler = handlers[urlPath];

  if (handler) {
    try {
      handler(req, res);
    } catch (err) {
      res.status(500).send("Internal Server Error");
      console.error(`[ERROR] Error in handler for ${urlPath}:`, err);
    }
  } else {
    next();
  }
});

const httpsServer = https.createServer(options, app);
const httpServer = http.createServer((req, res) => {
  const host = req.headers.host || "localhost";
  res.writeHead(301, { Location: `https://${host}${req.url}` });
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

chokidar
  .watch(handlersDir, { persistent: true })
  .on("change", async (filePath) => {
    if (filePath.endsWith(".cjs")) {
      console.log(
        `[INFO] Detected change in ${filePath}, reloading handler...`,
      );
      try {
        delete require.cache[require.resolve(filePath)];
        const module = require(filePath);
        const moduleName = path
          .basename(filePath, ".cjs")
          .replace("Handler", "")
          .toLowerCase();
        handlers[`/api/${moduleName}`] = module;
        console.log(`[INFO] Reloaded handler for /api/${moduleName}`);
      } catch (err) {
        console.error(`[ERROR] Failed to reload handler ${filePath}:`, err);
      }
    }
  });
