const Interacao = require("../models/interacaoModel");

const getAllInteracoes = async (req, res) => {
    try {
        const interacoes = await Interacao.getInteracoes();
        res.status(200).json({
            message: "Lista de interações recuperada com sucesso.",
            total: interacoes.length,
            data: interacoes
        });
    } catch (err) {
        console.error("Erro ao buscar interações:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const getInteracoesByPersonagem = async (req, res) => {
    try {
        const { personagemId } = req.params;
        const interacoes = await Interacao.getInteracoesByPersonagem(personagemId);

        if (interacoes.length === 0) {
            return res.status(404).json({ error: "Nenhuma interação encontrada para este personagem." });
        }

        res.status(200).json({
            message: `Interações do personagem ${personagemId} recuperadas com sucesso.`,
            total: interacoes.length,
            data: interacoes
        });
    } catch (err) {
        console.error("Erro ao buscar interações por personagem:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const createInteracao = async (req, res) => {
    try {
        const { personagemId, nomeFan, tipo, conteudo } = req.body;

        if (!personagemId || !nomeFan || !tipo || !conteudo) {
            return res.status(400).json({
                error: "Campos obrigatórios ausentes.",
                details: "Os campos 'personagemId', 'nomeFan', 'tipo' e 'conteudo' são obrigatórios."
            });
        }

        const interacao = await Interacao.createInteracao(personagemId, nomeFan, tipo, conteudo);

        res.status(201).json({
            message: "Interação criada com sucesso!",
            data: interacao
        });
    } catch (err) {
        console.error("Erro ao criar interação:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const updateInteracao = async (req, res) => {
    try {
        const { id } = req.params;
        const { nomeFan, tipo, conteudo } = req.body;

        if (!nomeFan || !tipo || !conteudo) {
            return res.status(400).json({
                error: "Campos obrigatórios ausentes.",
                details: "Os campos 'nomeFan', 'tipo' e 'conteudo' são obrigatórios."
            });
        }

        const interacao = await Interacao.updateInteracao(id, nomeFan, tipo, conteudo);

        if (!interacao) {
            return res.status(404).json({ error: "Interação não encontrada." });
        }

        res.status(200).json({
            message: "Interação atualizada com sucesso!",
            data: interacao
        });
    } catch (err) {
        console.error("Erro ao atualizar interação:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const deleteInteracao = async (req, res) => {
    try {
        const { id } = req.params;
        const interacao = await Interacao.deleteInteracao(id);

        if (!interacao) {
            return res.status(404).json({ error: "Interação não encontrada." });
        }

        res.status(200).json({
            message: "Interação deletada com sucesso!",
            data: interacao
        });
    } catch (err) {
        console.error("Erro ao deletar interação:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

module.exports = {
    getAllInteracoes,
    getInteracoesByPersonagem,
    createInteracao,
    updateInteracao,
    deleteInteracao
};
