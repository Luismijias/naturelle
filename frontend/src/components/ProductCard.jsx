import './ProductCard.less';

function ProductCard({ produto }) {
  const { nome, descricao, preco, imagem_url } = produto;

  return (
    <div className="product-card">
      {imagem_url && (
        <div className="product-image-wrapper">
          <img
            src={imagem_url}
            alt={nome}
            className="product-image"
          />
        </div>
      )}

      <div className="product-content">
        <h2 className="product-title">{nome}</h2>
        <p className="product-description">
          {descricao || 'Sem descrição disponível.'}
        </p>
        <p className="product-price">
          {preco ? `R$ ${preco}` : 'Preço não informado'}
        </p>
        <button className="product-button">
          Ver detalhes
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
