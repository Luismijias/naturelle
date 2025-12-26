
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import FloatingCart from "../components/FloatingCart";

const produtos = [
  { name: "Produto A", price: 49.9, image: "/assets/produtoA.jpg" },
  { name: "Produto B", price: 79.9, image: "/assets/produtoB.jpg" },
  { name: "Produto C", price: 99.9, image: "/assets/produtoC.jpg" },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {produtos.map((p, i) => (
        <ProductCard key={i} product={p} addToCart={addToCart} />
      ))}

      {cartOpen && <FloatingCart cart={cart} closeCart={() => setCartOpen(false)} />}
    </div>
  );
}
