import { useState } from "react";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";
import './Header.css';

export default function Header({ toggleCart, cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <a href="/" className="logo">Naturelle</a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <a href="/" className="nav-link active">Home</a>
          <a href="/products" className="nav-link">Products</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="actions-desktop">
          <button className="cart-btn" onClick={toggleCart}>
            <HiShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="/" className="mobile-link active">Home</a>
        <a href="/products" className="mobile-link">Products</a>
        <a href="/about" className="mobile-link">About</a>
        <a href="/contact" className="mobile-link">Contact</a>
      </nav>
    </header>
  );
}
