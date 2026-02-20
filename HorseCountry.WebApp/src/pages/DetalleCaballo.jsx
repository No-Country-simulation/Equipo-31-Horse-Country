import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetalleCaballo = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const [horse, setHorse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5233/api/horses/${id}`)
      .then(res => res.json())
      .then(data => setHorse(data))
      .catch(err => console.error("Error:", err));
  }, [id]);

  if (!horse) return <div className="p-10 text-center">Cargando detalles...</div>;

  return (
  <div className="min-h-[calc(100vh-80px)] bg-[#f5f5dc] flex items-center justify-center p-4 md:p-8">
    <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
      {/* Sección de Imagen/Icono */}
      <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center min-h-[300px]">
        <span className="text-9xl filter drop-shadow-lg">🐴</span>
      </div>

      {/* Sección de Información */}
      <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <div className="mb-6">
          <span className="text-sm font-bold text-[#8B4513] uppercase tracking-widest">Ejemplar Exclusivo</span>
          <h2 className="text-5xl font-black text-[#3d2817] mt-2">{horse.name}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-400 uppercase">Raza</p>
            <p className="font-bold text-gray-700">{horse.breed?.description}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-400 uppercase">Color</p>
            <p className="font-bold text-gray-700">{horse.color?.description}</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8 italic">
          "{horse.descriprtion}" {/* cite: Horse.cs */}
        </p>

        <div className="flex items-center justify-between border-t pt-6">
          <div>
            <p className="text-xs text-gray-400 uppercase">Precio de Inversión</p>
            <span className="text-4xl font-black text-blue-600">${horse.price.toLocaleString()}</span>
          </div>
          <button 
            onClick={() => { agregarAlCarrito(horse); navigate("/carrito")}}
            className="bg-[#3d2817] hover:bg-[#d4af37] text-white hover:text-[#3d2817] px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  </div>
);
};
export default DetalleCaballo;