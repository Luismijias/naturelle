import { useEffect, useState } from "react";
import Produtos from "./components/Produtos";

function App() {
  const [produtos, setProdutos] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/Produtos`)
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <Produtos produtos={produtos} />
    </div>
  );
}

export default App;
