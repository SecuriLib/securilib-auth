const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB connecté");
  app.listen(process.env.PORT || 10000, () => {
    console.log(`🚀 Serveur actif sur le port ${process.env.PORT}`);
  });
})
.catch(err => console.error("Erreur Mongo:", err));