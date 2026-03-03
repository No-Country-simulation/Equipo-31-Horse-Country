import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo3.png";
import { ShoppingCart } from "lucide-react";

const NavBar = ({ carritoCount, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ← agregado
  const location = useLocation(); // ← agregado
  const currentPath = location.pathname; // ← agregado


  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");

    window.dispatchEvent(new Event("userRoleChanged"));


    navigate("/"); // ← redirige al Home
  };

  return (
    <nav className="fixed top-0 left-0 right-0  backdrop-blur-sm bg-oscuro/40
 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 
              bg-linear-to-br from-[#d4af37] to-[#b8860b] 
              rounded-lg 
              flex items-center justify-center 
              transform 
              group-hover:scale-110 transition-transform duration-300"
            >
              <img className="w-10 invert brightness-0 sepia saturate-200 hue-rotate-20deg"
                src={logo} alt="logo silueta de caballo" />
            </div>
            <div className=" sm:block">
              <h1 className="text-xl font-bold text-cream tracking-wide">Horse Country</h1>
              <p className="text-xs text-primary">Caballos de Élite</p>
            </div>
          </Link>
          {/**Menu hamburgesa para celu               <span className="text-2xl font-bold text-cream">HC</span>
*/}



          <button
            className="md:hidden text-[#f5f5dc] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">✕</span> // ícono de cerrar
            ) : (
              <span className="text-2xl">☰</span> // ícono de hamburguesa
            )}
          </button>
          {/* Menú */}
          <div className="hidden md:flex items-center space-x-8">

            {currentPath !== "/" && (
              <Link onClick={() => window.scrollTo(0, 0)}
                to="/"
                className="px-6 py-2.5 
                bg-primary text-cream hover:bg-secondary
                rounded-lg 
                font-semibold
                transition-colors 
                duration-200 
                shadow-md 
                hover:shadow-xl"
              >
                Inicio
              </Link>
            )}

            {currentPath !== "/catalogo" && (
              <Link onClick={() => window.scrollTo(0, 0)}
                to="/catalogo"
                className="px-6 py-2.5 
                 bg-primary text-cream hover:bg-secondary
                rounded-lg 
                font-semibold
                transition-colors 
                duration-200 
                shadow-md 
                hover:shadow-xl"
              >
                Catálogo
              </Link>

            )}



            {/* Si NO hay usuario → mostrar Iniciar Sesión */}
            {!userRole && currentPath !== "/login" && (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/login"
                className="px-6 py-2.5
                bg-secondary text-oscuro hover:bg-mostaza  
                rounded-lg 
                font-semibold  
                transition-colors duration-200 shadow-md hover:shadow-xl"
              >
                Iniciar Sesión
              </Link>
            )}
            {/**Carrito  **/}
           {userRole === "Comprador" && (
             <Link to="/carrito" className="relative">
              <ShoppingCart size={24} />

              {carritoCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-cream text-xs rounded-full px-2">
                  {carritoCount}
                </span>
              )}
            </Link>

           )}

          


            {/* ADMIN */}
            {userRole === "ADMIN" && (
              <Link onClick={() => window.scrollTo(0, 0)} to="/admin" className="px-6 py-2.5
                bg-secondary text-oscuro hover:bg-mostaza  
                rounded-lg 
                font-semibold  
                transition-colors duration-200 shadow-md hover:shadow-xl">
                🔧 Panel Admin
              </Link>
            )}

            {/* Vendedor */}
            {userRole === "Vendedor" && (
              <Link onClick={() => window.scrollTo(0, 0)} to="/alta" className="px-6 py-2.5
                bg-secondary text-oscuro hover:bg-mostaza  
                rounded-lg 
                font-semibold  
                transition-colors duration-200 shadow-md hover:shadow-xl">
                Alta caballo
              </Link>
            )}

            {/* Cerrar sesión */}
            {userRole && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white hover:bg-mostaza  rounded-lg font-semibold  transition"
              >
                Cerrar sesión
              </button>
            )}
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  space-y-2 p-4 bg-primary text-center">
          <Link
            to="/"
            className="block text-cream hover:text-secondary font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>

          <Link
            to="/catalogo"
            className="block text-cream hover:text-secondary font-medium"
            onClick={() => setIsOpen(false)}
          >
            Catálogo
          </Link>

          {!userRole && (
            <Link
              to="/login"
              className="block px-4 py-2 bg-secondary text-oscuro rounded-lg font-semibold hover:bg-mostaza  transition-colors duration-200 shadow-md hover:shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Iniciar Sesión
            </Link>
          )}

          {userRole === "ADMIN" && (
            <Link
              to="/admin"
              className="block text-[#d4af37] font-bold"
              onClick={() => setIsOpen(false)}
            >
              🔧 Panel Admin
            </Link>
          )}

          {userRole === "Vendedor" && (
            <Link
              to="/alta"
              className="block text-[#d4af37] font-bold"
              onClick={() => setIsOpen(false)}
            >
              Alta caballo
            </Link>
          )}

          {userRole && (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Cerrar sesión
            </button>
          )}

        </div>
      )}
    </nav>
  );
};

export default NavBar;