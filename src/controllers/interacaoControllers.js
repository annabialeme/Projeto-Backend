const Interacao = require("../models/interacaoModel");

const getAllInteracoes = async (requestAnimationFrame, res) => {
    try {
        const interacoes = await Interacao.getInteracoes();
        res.status(200).json({
            message: "Lista de interações recuperada com sucesso",
            total: interacoes.lenght,
            data: interacoes
        });
    } catch (err) {
        console.error("Erro ao buscar interações:", err);
        res.status(500).json({
            erro: "Erro interno",
            details: err.message
        });
    }
};

const getInteracoesByPersonagem = async (req, res) => {
    try {
        const {personagemId} = req.params;
        const interacoes = await Interacao.getInteracoesByPersonagem(personagemId);

        if(interacoes.lenght === 0) {
            return res.status(404).json({error: "Nenhuma interação encontrada para este personagem"});
        }

        res.status(200).json({
            message: `Interações do personagem ${personagemId} recuperadas com sucesso`,
            total: interacoes.lenght,
            data: interacoes
        });
    } catch (err) {
        console.error("Erro ao buscar interações por personagem:", err);
        res.status(500).json({
            error: "Erro interno",
            details: err.message
    }
};
