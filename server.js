require("dotenv").config();
const express = require("express");
const cors = require("cors");
const personagensRoutes = require("./src/routes/personangensRoutes");
const detalhesRoutes = require("./src/routes/detalhesRoutes");

const app = express();
app.use(cors());
app.use(express.json());
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/personagens", personagensRoutes);
app.use("/api/detalhes", detalhesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
