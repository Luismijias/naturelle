import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo e descrição */}
        <div className="footer-brand">
          <a href="/" className="logo">Naturelle</a>
          <p>Produtos naturais para uma vida mais saudável. Suplementos, vitaminas e bem-estar natural.</p>
        </div>

        {/* Links rápidos */}
        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-contact">
          <h3>Contato</h3>
          <ul>
            <li>WhatsApp: (11) 99999-9999</li>
            <li>email@naturelle.com</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Naturelle. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


