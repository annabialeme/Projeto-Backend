const Quiz = require('../models/quizModel');
const Perguntas = require('../models/perguntasModel');

const createQuiz = async (req, res) => {
    try {
        const { titulo, descricao, perguntas } = req.body;

        if (!titulo || !descricao || !perguntas || !Array.isArray(perguntas) || perguntas.length === 0) {
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'titulo', 'descricao' e 'perguntas' (array) são obrigatórios"
            });
        }

        const quiz = await Quiz.createQuiz(titulo, descricao);

        for (const pergunta of perguntas) {
            const { texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta } = pergunta;

            if (!texto || !alternativa_a || !alternativa_b || !alternativa_c || !alternativa_d || !resposta_correta) {
                return res.status(400).json({
                    error: "Campos obrigatórios não foram preenchidos nas perguntas",
                    details: "Cada pergunta deve conter 'texto', 'alternativa_a', 'alternativa_b', 'alternativa_c', 'alternativa_d' e 'resposta_correta'"
                });
            }

            await Perguntas.createPergunta(
                quiz.id,
                texto,
                alternativa_a,
                alternativa_b,
                alternativa_c,
                alternativa_d,
                resposta_correta
            );
        }

        res.status(201).json({
            message: "Quiz criado com sucesso",
            data: quiz
        });
    } catch (err) {
        console.error("Erro ao criar quiz:", err);
        res.status(500).json({
            error: "Erro interno do servidor",
            details: err.message
        });
    }
};

const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.getQuizzes();

        res.status(200).json({
            message: "Lista de quizzes recuperada com sucesso",
            total: quizzes.length,
            data: quizzes
        });
    } catch (err) {
        console.error("Erro ao buscar quizzes:", err);
        res.status(500).json({
            error: "Erro ao buscar quizzes",
            details: err.message
        });
    }
};

const getQuizById = async (req, res) => {
    try {
        const { id } = req.params;
        const quiz = await Quiz.getQuizById(id);

        if (!quiz) {
            return res.status(404).json({ error: "Quiz não encontrado." });
        }

        const perguntas = await Perguntas.getPerguntas(id);

        res.status(200).json({
            message: "Quiz recuperado com sucesso.",
            data: {
                quiz,
                perguntas
            }
        });
    } catch (err) {
        console.error("Erro ao buscar quiz por ID:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const updateQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, perguntas } = req.body;

        if (!titulo || !descricao) {
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'titulo' e 'descricao' são obrigatórios"
            });
        }

        const quiz = await Quiz.updateQuiz(id, titulo, descricao);

        if (!quiz) {
            return res.status(404).json({ error: "Quiz não encontrado." });
        }

        if (perguntas && Array.isArray(perguntas)) {
            for (const pergunta of perguntas) {
                const { id: perguntaId, texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta } = pergunta;

                if (!texto || !alternativa_a || !alternativa_b || !alternativa_c || !alternativa_d || !resposta_correta) {
                    return res.status(400).json({
                        error: "Campos obrigatórios não foram preenchidos nas perguntas",
                        details: "Cada pergunta deve conter 'texto', 'alternativa_a', 'alternativa_b', 'alternativa_c', 'alternativa_d' e 'resposta_correta'"
                    });
                }

                await Perguntas.updatePergunta(
                    perguntaId,
                    texto,
                    alternativa_a,
                    alternativa_b,
                    alternativa_c,
                    alternativa_d,
                    resposta_correta
                );
            }
        }

        res.status(200).json({
            message: "Quiz atualizado com sucesso",
            data: quiz
        });
    } catch (err) {
        console.error("Erro ao atualizar quiz:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const deleteQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const quiz = await Quiz.deleteQuiz(id);

        if (!quiz) {
            return res.status(404).json({ error: "Quiz não encontrado." });
        }

        res.status(200).json({
            message: "Quiz deletado com sucesso",
            data: quiz
        });
    } catch (err) {
        console.error("Erro ao deletar quiz:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

module.exports = {
    createQuiz,
    getAllQuizzes,
    getQuizById,
    updateQuiz,
    deleteQuiz
};