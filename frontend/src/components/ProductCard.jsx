export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-green-600 font-semibold mb-2">R$ {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

