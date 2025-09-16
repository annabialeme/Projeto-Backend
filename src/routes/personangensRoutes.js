const express = require("express");
const router = express.Router();
const personagensController = require("../controllers/personagensController");
const upload = require("../config/upload");

router.post("/", upload.single("imagem_url"), personagensController.createPersonagem);
router.get("/", personagensController.getAllPersonagens);
router.get("/:id", personagensController.getPersonagemById);
router.put("/:id", upload.single("imagem_url"), personagensController.updatePersonagem);
router.delete("/:id", personagensController.deletePersonagem);

module.exports = router;
