import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const app = express();

// Permitir CORS para localhost (dev) e front-end no Railway
app.use(cors({
  origin: [
    "http://localhost:5173", // desenvolvimento local
    "https://frontend-production-2022.up.railway.app" // front-end no Railway
  ]
}));

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Rota de saúde
app.get("/health", (req, res) => res.json({ status: "API funcionando" }));

// Rota de produtos
app.get("/produtos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM produtos");
    res.json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar produtos:", err.message);
    res.status(500).json({ error: "Erro ao conectar no banco de dados" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
