const express = require("express");
const router = express.Router();
const detalhesController = require("../controllers/detalhesController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey"); 

router.get("/", detalhesController.getAllDetalhes);
router.get("/:id", detalhesController.getDetalheById);
router.post("/", upload.single("imagem"), detalhesController.createDetalhe);
router.put("/:id", upload.single("imagem"), detalhesController.updateDetalhe);
router.delete("/:id", detalhesController.deleteDetalhe);

router.use(apiKeyMiddleware);
module.exports = router;
