const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const mime = require("mime-types");
const { exec } = require("child_process");

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

app.use(morgan("combined", { stream: accessLogStream }));

app.use((req, res, next) => {
  console.log(`[REQUEST] ${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function (body) {
    const statusMessage = res.statusMessage || "OK"; // Ustaw domyślną wartość, jeśli res.statusMessage jest niezdefiniowane
    console.log(`[RESPONSE] ${res.statusCode} ${statusMessage}`);
    originalSend.call(this, body);
  };
  next();
});

app.param("language", (req, res, next, language) => {
  req.language = language;
  next();
});

// Handler for translations
const Translation = require("./models/Translation.cjs");

app.get("/api/translations/:language", async (req, res) => {
  const { language } = req.params;

  try {
    const translations = await Translation.find({ language });
    const translationMap = translations.reduce((map, translation) => {
      map[translation.key] = translation.value;
      return map;
    }, {});

    res.json(translationMap);
  } catch (err) {
    console.error("[ERROR] Błąd podczas pobierania tłumaczeń:", err);
    res.status(500).json({ error: "Failed to fetch translations" });
  }
});

// Handler for example
const ExampleSchema = new mongoose.Schema(
  { name: String },
  { collection: "examples" },
);
const ExampleModel =
  mongoose.models.examples || mongoose.model("examples", ExampleSchema);

app.get("/api/example", async (req, res) => {
  console.log("[DEBUG] Otrzymano zapytanie:", req.method, req.url);

  try {
    await global.mongooseConnection;
    console.log("[DEBUG] Połączenie z bazą danych gotowe.");

    const data = await ExampleModel.find();
    console.log(
      "[DEBUG] Pobranie danych zakończone. Ilość rekordów:",
      data.length,
    );

    res.json(data);
  } catch (err) {
    console.error("[ERROR] Błąd podczas pobierania danych:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: err.message });
  }
});

// Handler for data
app.get("/api/data", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("This is the data resource!");
});

// Handler for auth
const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true },
    name: String,
    email: String,
  },
  { collection: "users" },
);

const UserModel = mongoose.models.users || mongoose.model("users", UserSchema);

app.post("/api/auth", async (req, res) => {
  const { googleId, name, email } = req.body;

  try {
    let user = await UserModel.findOne({ googleId });

    if (user) {
      // Aktualizacja danych użytkownika
      user.name = name;
      user.email = email;
      await user.save();
    } else {
      // Rejestracja nowego użytkownika
      user = new UserModel({ googleId, name, email });
      await user.save();
    }

    res.status(200).json({ message: "User saved successfully", user });
  } catch (error) {
    console.error("[ERROR] Error saving user:", error);
    res.status(500).json({ error: "Failed to save user" });
  }
});

// Handler for secret
app.get("/api/secret", (req, res) => {
  const clientCert = req.socket.getPeerCertificate();

  const respondMessage = (req, res) => {
    const cert = req.socket.getPeerCertificate();
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Welcome to the secret area! Client: ${cert.subject.CN}`);
  };

  // Jeśli certyfikat nie został dostarczony lub jest pusty
  if (!clientCert || Object.keys(clientCert).length === 0) {
    // Ponownie negocjujemy TLS, żądając certyfikatu
    req.socket.renegotiate(
      {
        requestCert: true,
        rejectUnauthorized: true, // Odrzucamy, jeśli certyfikat nie jest ważny
      },
      (err) => {
        if (err) {
          console.error("[ERROR] Renegotiation failed:", err);
          req.socket.end(); // Zamykamy połączenie w przypadku błędu
          return;
        }

        const newCert = req.socket.getPeerCertificate();
        if (
          !newCert ||
          Object.keys(newCert).length === 0 ||
          !req.client.authorized
        ) {
          // Jeśli nadal brak ważnego certyfikatu, zamykamy połączenie
          req.socket.end();
        } else {
          // Certyfikat dostarczony i ważny
          respondMessage(req, res);
        }
      },
    );
  } else if (!req.client.authorized) {
    // Jeśli certyfikat jest obecny, ale nieważny, zamykamy połączenie
    req.socket.end();
  } else {
    // Certyfikat jest obecny i ważny od razu
    respondMessage(req, res);
  }
});

// Handler for user
app.get("/api/user", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("This is the user resource!");
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

// Uruchom skrypt importowania tłumaczeń
exec(
  "node ./src/server/scripts/importTranslations.cjs",
  (err, stdout, stderr) => {
    if (err) {
      console.error("[ERROR] Błąd podczas importowania tłumaczeń:", err);
      return;
    }
    console.log("[INFO] Import tłumaczeń zakończony");
    console.log(stdout);
    console.error(stderr);
  },
);
