const pool = require("../config/database");


const getQuizzes = async () => {
    const result = await pool.query("SELECT * FROM quiz");
    return result.rows;
};

const getQuizById = async (id) => {
    const result = await pool.query("SELECT * FROM quiz WHERE id = $1", [id]);
    return result.rows[0];
};

const createQuiz = async (titulo, descricao, perguntas) => {
    const result = await pool.query(
        `INSERT INTO quiz (titulo, descricao, perguntas)
         VALUES ($1, $2, $3) RETURNING *`,
        [titulo, descricao, JSON.stringify(perguntas)]
    );
    return result.rows[0];
};


const updateQuiz = async (id, titulo, descricao, perguntas) => {
    const result = await pool.query(
        `UPDATE quiz
         SET titulo = $1, descricao = $2, perguntas = $3
         WHERE id = $4 RETURNING *`,
        [titulo, descricao, JSON.stringify(perguntas), id]
    );
    return result.rows[0];
};

const deleteQuiz = async (id) => {
    const result = await pool.query("DELETE FROM quiz WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = {
    getQuizzes,
    getQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
};
 