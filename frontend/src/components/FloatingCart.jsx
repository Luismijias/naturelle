// components/FloatingCart.jsx
export default function FloatingCart({ cart, closeCart }) {
  return (
    <div className="fixed bottom-4 right-4 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-lg">Carrinho</h2>
        <button onClick={closeCart} className="text-red-500 font-bold">X</button>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">Carrinho vazio</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i} className="flex justify-between mb-2">
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
