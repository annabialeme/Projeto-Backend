const Personagem =require('../models/personagensModel');

const createPersonagem = async (req, res) => {
    try {
        const {nome, imagem_url, descricao, frases, curiosidades} = req.body;
        
        if(!nome || !descricao){
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'nome' e 'descricao' são obrigatórios"
            });
        }

        const personagem = await Personagem.createPersonagem(
            nome,
            imagem_url,
            descricao, 
            frases, 
            curiosidades
        );
        res.status(201).json({
            message: "Personagem criado com sucesso",
            data: personagem
        });
    } catch (err) {
        console.error("Erro ao criar personagem:", err);
        res.status(500).json({
            error: "Erro interno do servidor",
            details: err.message
        });
    }
}

const getAllPersonagens = async (req, res) => {
    try {
        const personagens = await Personagem.getPersonagens();

        res.status(200).json({
            message: "Lista de personagens recuperada com sucesso",
            total: personagens.length,
            data: personagens
        });
    } catch (err) {
        console.error("Erro ao buscar personagens:", err);
        res.status(500).json({
            error: "Erro ao buscar personagens",
            details: err.message
        });
    }
}

const getPersonagemById = async (req, res) => {
    try {
        const { id } = req.params;
        const personagem = await Personagem.getPersonagemById(id);

        if (!personagem) {
            return res.status(404).json({ error: "Personagem não encontrado." });
        }

        res.status(200).json({
            message: "Personagem recuperado com sucesso.",
            data: personagem
        });
    } catch (err) {
        console.error("Erro ao buscar personagem por ID:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const updatePersonagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, imagem_url, descricao, frases, curiosidades } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({
                error: "Campos obrigatórios não foram preenchidos",
                details: "'nome' e 'descricao' são obrigatórios"
            });
        }

        const personagem = await Personagem.updatePersonagem(
            id,
            nome,
            imagem_url,
            descricao,
            frases,
            curiosidades
        );

        if (!personagem) {
            return res.status(404).json({ error: "Personagem não encontrado." });
        }

        res.status(200).json({
            message: "Personagem atualizado com sucesso",
            data: personagem
        });
    } catch (err) {
        console.error("Erro ao atualizar personagem:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

const deletePersonagem = async (req, res) => {
    try {
        const { id } = req.params;
        const personagem = await Personagem.deletePersonagem(id);

        if (!personagem) {
            return res.status(404).json({ error: "Personagem não encontrado." });
        }

        res.status(200).json({
            message: "Personagem deletado com sucesso",
            data: personagem
        });
    } catch (err) {
        console.error("Erro ao deletar personagem:", err);
        res.status(500).json({ error: "Erro interno.", details: err.message });
    }
};

module.exports = {
    createPersonagem,
    getAllPersonagens,
    getPersonagemById,
    updatePersonagem,
    deletePersonagem
};

