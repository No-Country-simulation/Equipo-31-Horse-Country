import { useState } from "react";

const BarraBusqueda = ({ onSearch, initialValue = ""  }) => {
  const [query, setQuery] = useState(initialValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };


  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        placeholder="Buscar caballo..."
        value={query}
        onChange={handleChange}
        className="bg-white/70 text-primary w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
      />
    </div>
  );
};

export default BarraBusqueda;