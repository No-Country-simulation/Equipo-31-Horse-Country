import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const BarraBusquedaHome = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/catalogo?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-semibold text-secondary mb-6 drop-shadow-sm">
        Explora nuestros ejemplares de élite
      </h2>

      <form onSubmit={handleSubmit} className="flex justify-center w-full px-4">
        <div
          className="
            flex items-center w-full max-w-xl 
            bg-white/70 backdrop-blur-sm
            border border-secondary 
            rounded-2xl shadow-md 
            px-4 py-3
            transition-all duration-300
            focus-within:shadow-lg
          "
        >
          <Search className="w-6 h-6 text-secondary mr-3" />

          <input
            type="text"
            placeholder="Buscar por raza, color, categoría..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              flex-1 bg-transparent outline-none 
              text-primary text-lg
              placeholder:text-secondary placeholder:italic
            "
          />
        </div>
      </form>
    </div>
  );
};

export default BarraBusquedaHome;