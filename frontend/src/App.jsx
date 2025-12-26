import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(err => console.error("Erro ao carregar produtos:", err));
  }, []);

  return (
    <div>
      <h1>Naturelle Encapsulados Naturais</h1>
      <div className="produtos-grid">
        {Array.isArray(produtos) && produtos.map(p => (
          <div key={p.id} className="produto-card">
            <h2>{p.nome}</h2>
            <p>{p.descricao}</p>
            <strong>R$ {p.preco}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

