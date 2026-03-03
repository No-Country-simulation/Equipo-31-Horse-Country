import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-cream py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo + nombre */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-linear-to-br from-[#d4af37] to-[#b8860b] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <img
              className="w-10 invert brightness-0 sepia saturate-200 hue-rotate-20deg"
              src={logo}
              alt="logo silueta de caballo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-cream tracking-wide">Horse Country</h1>
            <p className="text-xs text-secondary">Caballos de Élite</p>
          </div>
        </Link>

        {/* Enlaces rápidos */}
        <nav className="flex gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-secondary transition">Inicio</Link>
          <Link to="/catalogo" className="hover:text-secondary transition">Catálogo</Link>
          <Link to="/about" className="hover:text-secondary transition">Sobre nosotros</Link>
          <Link to="/login" className="hover:text-secondary transition">Iniciar sesión</Link>
        </nav>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Horse Country
          </p>
          <p className="text-xs opacity-60">Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;