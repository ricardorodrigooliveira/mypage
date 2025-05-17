const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const jwt = require("jsonwebtoken");
const SECRET = "mySecretCode"; // em produção use variável ambiente

const router = express.Router();

// Rota de registro
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      function (err) {
        if (err) {
          if (err.message.includes("UNIQUE")) {
            return res.status(409).json({ error: "Email já cadastrado." });
          }
          return res.status(500).json({ error: err.message });
        }

        res.status(201).json({ message: "Usuário registrado com sucesso!", userId: this.lastID });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
});

// Rota de login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email e senha são obrigatórios." });

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: "Usuário não encontrado." });

    // Verifica senha
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Senha incorreta." });

    // Gera token JWT (payload básico com id e email)
    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login realizado com sucesso!", token });
  });
});

module.exports = router;
