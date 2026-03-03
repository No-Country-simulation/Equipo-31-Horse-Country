import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from "lucide-react";

const Carrito = ({ items, finalizarCompra, eliminarDelCarrito }) => {
  
  const navigate = useNavigate(); // Creamos la función aquí
  const total = items.reduce((acc, item) => acc + (item.price || 0), 0);



  return (
    <div className="min-h-screen bg-[#f5f5dc] py-40 px-8">
      <h2 className="text-3xl font-bold text-[#3d2817] mb-8 text-center uppercase tracking-wider">
        Carrito de Compras
      </h2>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl shadow-xl max-w-lg mx-auto border border-gray-200">

          <div className="bg-[#f5f5dc] p-6 rounded-full shadow-inner mb-6">
            <ShoppingCart size={60} className="text-gray-400" />
          </div>

          <h3 className="text-2xl font-bold text-[#3d2817] mb-3">
            Tu carrito está vacío
          </h3>

          <p className="text-gray-600 mb-8 max-w-sm">
            Aún no has agregado ningún ejemplar. Explora nuestro catálogo y descubre caballos de élite seleccionados especialmente para vos.
          </p>

          <button
            onClick={() => navigate("/catalogo")}
            className="px-8 py-3 bg-[#3d2817] text-cream rounded-xl font-semibold hover:bg-[#d4af37] hover:text-[#3d2817] transition-all shadow-lg"
          >
            Ir al Catálogo
          </button>

        </div>

      ) : (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex flex-col">
                  {/* Nombre en gris muy oscuro para legibilidad absoluta */}
                  <span className="text-gray-900 font-bold text-lg">{item.name}</span>
                  <span className="text-gray-500 text-sm italic">{item.breed?.description}</span>
                </div>
                {/* Precio en azul oscuro */}
                <span className="font-black text-blue-700 text-xl">
                  ${item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition shadow-sm"
                >
                  Quitar
                </button>


              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
            <div className="flex justify-between items-center text-2xl font-black">
              <span className="text-gray-800">Total a pagar:</span>
              <span className="text-blue-800">${total.toLocaleString()}</span>
            </div>
          </div>
          <button
            onClick={() => finalizarCompra(navigate)} // Llama a la función de App.jsx
            className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700"
          >
            Confirmar Compra y Generar Ticket
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;