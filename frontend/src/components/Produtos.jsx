import { useEffect, useState } from "react";
import "./Produtos.css";

function Produtos({ produtos }) {
  if (!produtos.length) return <p>Carregando produtos...</p>;

  return (
    <div className="produtos-container">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto-card">
          {/* Imagem acima do conteúdo */}
          {produto.imagem_url && (
            <img
              src={produto.imagem_url}
              alt={produto.nome}
              className="produto-imagem"
            />
          )}
          <h2>{produto.nome}</h2>
          <p>{produto.descricao || "Sem descrição"}</p>
          <p>Preço: {produto.preco || "Não informado"}</p>
        </div>
      ))}
    </div>
  );
}

export default Produtos;

// tudo ok
