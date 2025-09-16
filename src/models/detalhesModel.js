const pool = require("../config/database");

const getDetalhes = async () => {
    const result = await pool.query("SELECT * FROM detalhes");
    return result.rows;
};

const getDetalheById = async (id) => {
    const result = await pool.query("SELECT * FROM detalhes WHERE id = $1", [id]);
    return result.rows[0];
};

const createDetalhe = async (nome, imagem, descricao_completa, frases, curiosidades) => {
    const result = await pool.query(
        `INSERT INTO detalhes (nome, imagem, descricao_completa, frases, curiosidades)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [nome, imagem, descricao_completa, frases, curiosidades]
    );
    return result.rows[0];
};

const updateDetalhe = async (id, nome, imagem, descricao_completa, frases, curiosidades) => {
    const result = await pool.query(
        `UPDATE detalhes
        SET nome = $1, imagem = $2, descricao_completa = $3, frases = $4, curiosidades = $5
         WHERE id = $6 RETURNING *`,
        [nome, imagem, descricao_completa, frases, curiosidades, id]
    );
    return result.rows[0];
};

const deleteDetalhe = async (id) => {
    const result = await pool.query("DELETE FROM detalhes WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = {
    getDetalhes,
    getDetalheById,
    createDetalhe,
    updateDetalhe,
    deleteDetalhe
};
