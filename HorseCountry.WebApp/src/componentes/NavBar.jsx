import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  const navigate = useNavigate(); // ← agregado

  // Escucha cambios del login (evento personalizado)
  useEffect(() => {
    const updateRole = () => {
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("userRoleChanged", updateRole);

    return () => {
      window.removeEventListener("userRoleChanged", updateRole);
    };
  }, []);

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");

    setUserRole(null); // ← actualiza el NavBar

    navigate("/"); // ← redirige al Home
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#3d2817]/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-[#3d2817]">HC</span>
            </div>
            <div className=" sm:block">
              <h1 className="text-xl font-bold text-[#f5f5dc] tracking-wide">Horse Country</h1>
              <p className="text-xs text-[#d4af37]">Caballos de Élite</p>
            </div>
          </Link>
          {/**Menu hamburgesa para celu */}



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

            <Link onClick={() => window.scrollTo(0, 0)}
              to="/" className="text-[#f5f5dc] hover:text-[#d4af37] font-medium transition-colors duration-200">
              Inicio
            </Link>

            <Link onClick={() => window.scrollTo(0, 0)}
              to="/catalogo" className="text-[#f5f5dc] hover:text-[#d4af37] font-medium transition-colors duration-200">
              Catálogo
            </Link>

            {/* Si NO hay usuario → mostrar Iniciar Sesión */}
            {!userRole && (
              <Link
                to="/login"
                className="px-6 py-2.5 bg-[#d4af37] text-[#3d2817] rounded-lg font-semibold hover:bg-[#b8860b] transition-colors duration-200 shadow-md hover:shadow-xl"
              >
                Iniciar Sesión
              </Link>
            )}

            {/* ADMIN */}
            {userRole === "ADMIN" && (
              <Link to="/admin" className="text-[#8B4513] font-bold hover:underline">
                🔧 Panel Admin
              </Link>
            )}

            {/* Vendedor */}
            {userRole === "Vendedor" && (
              <Link to="/alta" className="text-[#8B4513] font-bold hover:underline">
                Alta caballo
              </Link>
            )}

            {/* Cerrar sesión */}
            {userRole && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Cerrar sesión
              </button>
            )}
          </div>

        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  space-y-2 p-4 bg-[#3d2817]/95 text-center">
          <Link
            to="/"
            className="block text-[#f5f5dc] hover:text-[#d4af37] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>

          <Link
            to="/catalogo"
            className="block text-[#f5f5dc] hover:text-[#d4af37] font-medium"
            onClick={() => setIsOpen(false)}
          >
            Catálogo
          </Link>

          {!userRole && (
            <Link
              to="/login"
              className="block px-4 py-2 bg-[#d4af37] text-[#3d2817] rounded-lg font-semibold hover:bg-[#b8860b] transition-colors duration-200 shadow-md hover:shadow-xl"
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