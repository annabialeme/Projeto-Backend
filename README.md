# 🎓 Projeto Backend - Maxton Hall API

Bem-vindo ao **Projeto Backend - Maxton Hall**, uma API desenvolvida para gerenciar os dados do universo de Maxton Hall. Este projeto utiliza **Node.js**, **Express** e **PostgreSQL** para fornecer uma API robusta e eficiente.

---

## 📋 Funcionalidades

- Gerenciamento de **Personagens**.
- Gerenciamento de **Detalhes**.
- Gerenciamento de **Quizzes** com perguntas e respostas.
- Estrutura modular e escalável.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Banco de dados relacional.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **cors**: Habilitação de CORS para comunicação entre frontend e backend.

---

## 🛠️ Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto na sua máquina.

### 1️⃣ Clone o Repositório

git clone https://github.com/annabialeme/Projeto-Backend.git
cd seu-repositorio

### 2️⃣ Instale as Dependências

npm install

###3️⃣ Configure o Banco de Dados
Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

CREATE DATABASE maxton;

###4️⃣ Crie o Arquivo .env
Na raiz do projeto, crie um arquivo chamado .env com as seguintes configurações:

# Configurações do Servidor
PORT=3000

# Configurações do Banco de Dados
DB_USER=postgres
DB_HOST=localhost
DB_NAME=maxton
DB_PASSWORD=ds564
DB_PORT=7777

# Chave de API

###5️⃣ Execute as Migrações
Execute o script SQL localizado em src/database/schema.sql no seu banco de dados para criar as tabelas.

###6️⃣ Inicie o Servidor
Inicie o servidor em modo de desenvolvimento:

Se tudo estiver configurado corretamente, você verá a seguinte mensagem no terminal:

🚀 Servidor rodando em http://localhost:3000