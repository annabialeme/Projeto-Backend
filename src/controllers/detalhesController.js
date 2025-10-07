const Detalhe = require('../models/detalhesModel');

const createDetalhe = async (req, res) => {
    try {
    const { nome, descricao_completa, frases, curiosidades } = req.body;
    const imagem = req.file ? `/uploads/${req.file.filename}` : null;

        if (!nome || !descricao_completa) {
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'nome' e 'descricao_completa' são obrigatórios"
            });
        }

        const detalhe = await Detalhe.createDetalhe(
            nome,
            imagem,
            descricao_completa,
            frases,
            curiosidades
        );
        res.status(201).json({
            message: "Detalhe criado com sucesso",
            data: detalhe
        });
    } catch (err) {
        console.error("Erro ao criar detalhe:", err);
        res.status(500).json({
            error: "Erro interno do servidor",
            details: err.message
        });
    }
};

const getAllDetalhes = async (req, res) => {
    try {
        const detalhes = await Detalhe.getDetalhes();
        res.status(200).json({
            message: "Lista de detalhes recuperada com sucesso",
            total: detalhes.length,
            data: detalhes
        });
    } catch (err) {
        console.error("Erro ao buscar detalhes:", err);
        res.status(500).json({
            error: "Erro ao buscar detalhes",
            details: err.message
        });
    }
};

const getDetalheById = async (req, res) => {
    try {
        const { id } = req.params;
        const detalhe = await Detalhe.getDetalheById(id);
        if (!detalhe) {
            return res.status(404).json({ error: "Detalhe não encontrado." });
        }
        res.status(200).json({
            message: "Detalhe recuperado com sucesso.",
            data: detalhe
        });
    } catch (err) {
        console.error("Erro ao buscar detalhe por ID:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const updateDetalhe = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, imagem, descricao_completa, frases, curiosidades } = req.body;
        if (!nome || !descricao_completa) {
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'nome' e 'descricao_completa' são obrigatórios"
            });
        }
        const detalhe = await Detalhe.updateDetalhe(
            id,
            nome,
            imagem,
            descricao_completa,
            frases,
            curiosidades
        );
        if (!detalhe) {
            return res.status(404).json({ error: "Detalhe não encontrado." });
        }
        res.status(200).json({
            message: "Detalhe atualizado com sucesso",
            data: detalhe
        });
    } catch (err) {
        console.error("Erro ao atualizar detalhe:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const deleteDetalhe = async (req, res) => {
    try {
        const { id } = req.params;
        const detalhe = await Detalhe.deleteDetalhe(id);
        if (!detalhe) {
            return res.status(404).json({ error: "Detalhe não encontrado." });
        }
        res.status(200).json({
            message: "Detalhe deletado com sucesso",
            data: detalhe
        });
    } catch (err) {
        console.error("Erro ao deletar detalhe:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

module.exports = {
    createDetalhe,
    getAllDetalhes,
    getDetalheById,
    updateDetalhe,
    deleteDetalhe
};
