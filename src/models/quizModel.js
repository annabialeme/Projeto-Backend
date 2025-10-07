const pool = require("../config/database");


const getQuizzes = async () => {
    const result = await pool.query("SELECT * FROM quiz");
    return result.rows;
};

const getQuizById = async (id) => {
    const quizResult = await pool.query("SELECT * FROM quiz WHERE id = $1", [id]);
    const quiz = quizResult.rows[0];

    if (!quiz) {
        return null;
    }

    const perguntasResult = await pool.query("SELECT * FROM perguntas WHERE quiz_id = $1", [id]);
    quiz.perguntas = perguntasResult.rows;

    return quiz;
};

const createQuiz = async (titulo, descricao, perguntas) => {
    const quizResult = await pool.query(
        `INSERT INTO quiz (titulo, descricao)
         VALUES ($1, $2) RETURNING *`,
        [titulo, descricao]
    );
    const quiz = quizResult.rows[0];

    for (const pergunta of perguntas) {
        const { texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta } = pergunta;

        await pool.query(
            `INSERT INTO perguntas (quiz_id, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [quiz.id, texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta]
        );
    }

    return quiz;
};

const updateQuiz = async (id, titulo, descricao, perguntas) => {
    const quizResult = await pool.query(
        `UPDATE quiz
         SET titulo = $1, descricao = $2
         WHERE id = $3 RETURNING *`,
        [titulo, descricao, id]
    );
    const quiz = quizResult.rows[0];

    if (!quiz) {
        return null;
    }


    await pool.query("DELETE FROM perguntas WHERE quiz_id = $1", [id]);

    for (const pergunta of perguntas) {
        const { texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta } = pergunta;

        await pool.query(
            `INSERT INTO perguntas (quiz_id, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [id, texto, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta_correta]
        );
    }

    return quiz;
};


const deleteQuiz = async (id) => {
    const quizResult = await pool.query("DELETE FROM quiz WHERE id = $1 RETURNING *", [id]);
    return quizResult.rows[0];
};

module.exports = {
    getQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
};
