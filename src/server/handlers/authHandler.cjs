const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true },
    name: String,
    email: String,
  },
  { collection: "users" },
);

const UserModel = mongoose.models.users || mongoose.model("users", UserSchema);

// Dodaj mapowanie auth bezpośrednio w handlerze
global.handlerMappings.auth = "/api/auth";

module.exports = async (req, res) => {
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
};
