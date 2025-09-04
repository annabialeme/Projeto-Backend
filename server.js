require("dotenv").config();
const express = require("express");
const cors = require("cors");
const personagensRoutes = require("./src/routes/personangensRoutes");
const interacaoRoutes = require("./src/routes/interacaoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/personagens", personagensRoutes);
app.use("/api/interacao", interacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
