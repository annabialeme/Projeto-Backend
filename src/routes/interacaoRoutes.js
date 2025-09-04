const express = require("express");
const router = express.Router();
const interacaoController = require("../controllers/interacaoControllers");

router.get("/", interacaoController.getAllInteracoes);
router.get("/personagem/:personagemId".interacaoController.getInteracoesByPersonagem)
router.post("/", interacaoController.createInteracao)
router.put("/:id", interacaoController.updateInteracao)
router.delete("/:id", interacaoController.deleteInteracao);

module.exports = router;