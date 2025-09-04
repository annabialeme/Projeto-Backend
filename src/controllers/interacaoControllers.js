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
}