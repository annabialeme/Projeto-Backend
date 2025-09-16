const express = require("express");
const router = express.Router();
const detalhesController = require("../controllers/detalhesControllers");
const upload = require("../config/upload");

router.get("/", detalhesController.getAllDetalhes);
router.get("/:id", detalhesController.getDetalheById);
router.post("/", upload.single("imagem"), detalhesController.createDetalhe);
router.put("/:id", upload.single("imagem"), detalhesController.updateDetalhe);
router.delete("/:id", detalhesController.deleteDetalhe);


module.exports = router;
