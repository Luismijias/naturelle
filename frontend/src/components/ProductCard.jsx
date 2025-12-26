// export default function ProductCard({ product, addToCart }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
//       <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
//       <h3 className="font-bold text-lg">{product.name}</h3>
//       <p className="text-green-600 font-semibold mb-2">R$ {product.price}</p>
//       <button
//         onClick={() => addToCart(product)}
//         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//       >
//         Adicionar ao Carrinho
//       </button>
//     </div>
//   );
// }

import './ProductCard.css';

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
