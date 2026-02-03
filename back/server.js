require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); 

const app = express();
app.use(express.json());
app.use(cors());


const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};


const pool = mysql.createPool(dbConfig);

async function findUserByCredentials(nome, senha) {
    const sql = "SELECT nome FROM usuarios WHERE nome = ? AND senha = ?";
    // O await espera o banco responder antes de continuar
    const [rows] = await pool.execute(sql, [nome, senha]);
    return rows[0]; // Retorna o primeiro usuário encontrado ou undefined
}

// 3. Rota Login
app.post('/login', async (req, res) => {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
        return res.status(400).send({ msg: "Campos obrigatórios ausentes" });
    }

    try {
        const user = await findUserByCredentials(nome, senha);

        if (user) {
            return res.status(200).send({ msg: "Logado", usuario: user.nome });
        } else {
            return res.status(401).send({ msg: "Login incorreto" });
        }
    } catch (error) {
        console.error("Erro no login:", error); // Log para o desenvolvedor
        return res.status(500).send({ msg: "Erro interno no servidor" }); // Resposta segura para o usuário
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor Clean Code rodando na porta ${PORT}`);
});