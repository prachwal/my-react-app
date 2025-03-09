const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/appdb";
console.log("[DEBUG] Używany URI MongoDB:", mongoUri);

if (!global.mongooseConnection) {
  console.log("[DEBUG] Inicjalizacja połączenia z MongoDB...");
  global.mongooseConnection = mongoose
    .connect(mongoUri, {
      useUnifiedTopology: true,
    })
    .then((m) => {
      console.log("[DEBUG] Połączono z MongoDB!");
      return m.connection;
    })
    .catch((err) => {
      console.error("[ERROR] Błąd połączenia z MongoDB:", err);
      throw err;
    });
}

const ExampleSchema = new mongoose.Schema(
  { name: String },
  { collection: "examples" },
);
console.log("[DEBUG] Schemat Mongoose został zainicjalizowany.");

const ExampleModel =
  mongoose.models.examples || mongoose.model("examples", ExampleSchema);
console.log("[DEBUG] Model Mongoose został utworzony:", ExampleModel.modelName);

global.handlerMappings.example = "/api/example";

const exampleHandler = async (req, res) => {
  console.log("[DEBUG] Otrzymano zapytanie:", req.method, req.url);

  try {
    await global.mongooseConnection;
    console.log("[DEBUG] Połączenie z bazą danych gotowe.");

    const data = await ExampleModel.find();
    console.log(
      "[DEBUG] Pobranie danych zakończone. Ilość rekordów:",
      data.length,
    );
    // console.log("[DEBUG] Dane:", JSON.stringify(data, null, 2));

    res.json(data);
  } catch (err) {
    console.error("[ERROR] Błąd podczas pobierania danych:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: err.message });
  }
};

module.exports = exampleHandler;
