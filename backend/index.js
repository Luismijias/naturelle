import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/health", (req, res) => {
  res.json({ status: "API funcionando" });
});

app.get("/produtos", async (req, res) => {
  const result = await pool.query("SELECT * FROM produtos");
  res.json(result.rows);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API rodando na porta", PORT));

