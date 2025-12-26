import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div>
      <h1>Naturelle Encapsulados Naturais</h1>
      {produtos.map(p => (
        <div key={p.id}>
          <h2>{p.nome}</h2>
          <p>{p.descricao}</p>
          <strong>R$ {p.preco}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;

