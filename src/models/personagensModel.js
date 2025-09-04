const pool=require("../config/database");

const getPersonagens=async()=>{
    const result=await pool.query("SELECT * FROM personagens");
    return result.rows;
};

const getPersonagemById=async(id)=>{
    const result=await pool.query("SELECT * FROM personagens WHERE id=$1",[id]);
    return result.rows[0];
}

const createPersonagem=async(nome,imagem_url, descricao, frases, curiosidades)=>{
    const result=await pool.query(
        `INSERT INTO personagens (nome, imagem_url, descricao, frases, curiosidades)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [nome, imagem_url, descricao, frases, curiosidades]
    );
    return result.rows[0];
}
    module.exports={
        getPersonagens,
        getPersonagemById,
        createPersonagem
    }