import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#3d2817]/95 backdrop-blur-sm z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/*Acá vendría el logo*/}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl font-bold text-[#3d2817]">EC</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold text-[#f5f5dc] tracking-wide">Equino Club</h1>
                            <p className="text-xs text-[#d4af37]">Caballos de Élite</p>
                        </div>
                    </Link>

                    {/*Acá vendría el menú de navegación*/}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-[#f5f5dc] hover:text-[#d4af37] font-medium transition-colors duration-200"
                            data-testid="nav-home-link"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/"
                            className="text-[#f5f5dc] hover:text-[#d4af37] font-medium transition-colors duration-200"
                            data-testid="nav-catalogue-link"
                        >
                            Catálogo
                        </Link>
                        <button
                            className="px-6 py-2.5 bg-[#d4af37] text-[#3d2817] rounded-lg font-semibold hover:bg-[#b8860b] transition-colors duration-200 shadow-md hover:shadow-xl"
                            data-testid="login-button"
                        >
                            Iniciar Sesión
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default NavBar