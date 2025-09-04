const express = require("express");
const router = express.Router();
const personagensController = require("../controllers/personagensController");

router.post("/", personagensController.createPersonagem);
router.get("/", personagensController.getAllPersonagens);
router.get("/:id", personagensController.getPersonagemById);
router.put("/:id", personagensController.updatePersonagem);
router.delete("/:id", personagensController.deletePersonagem);

module.exports = router;
