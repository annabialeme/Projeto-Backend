const pool = require("../config/database");

const getInteracoes = async () => {
    const result = await pool.query("SELECT * FROM interacao");
    return result.rows;
};

const getInteracoesByPersonagem = async (personagemId) => {
    const result = await pool.query(
        "SELECT * FROM interacao WHERE personagm_id = $1",
        [personagemId]
    );
    return result.rows;
};

const createInteracao = async (personagemId, nomeFan, tipo, conteudo) => {
    const result = await pool.query(
        `INSERT INTO interacao (personagem_id, nome_fan, tipo, conteudo)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [personagemId, nomeFan, tipo, conteudo]
    );
    return result.rows[0];
};

const updateInteracao = async(id, nomeFan, tipo, conteudo) => {
    const result = await pool.query(
        `UPDATE interacao
        SET nome_fan = $1, tipo =$2, conteudo =$3
        WHERE id =$4 RETURNING*`,
        [nomeFan, tipo, conteudo, id]
    );
    return result.rows[0];
};

const deleteInteracao = async (id) => {
    const result = await pool.query("DELETE FROM interacao WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
}

module.exports = {
    getInteracoes,
    getInteracoesByPersonagem,
    createInteracao,
    updateInteracao,
    deleteInteracao
}