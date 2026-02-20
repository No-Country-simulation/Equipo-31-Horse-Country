import { useNavigate } from 'react-router-dom';
const Carrito = ({ items, finalizarCompra }) => {
  const navigate = useNavigate(); // Creamos la función aquí
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-8">
      <h2 className="text-3xl font-bold text-[#3d2817] mb-8 text-center uppercase tracking-wider">
        Tu Carrito de Compras
      </h2>
      {items.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-xl shadow-md max-w-md mx-auto">
          <p className="text-gray-600 text-lg">El carrito está vacío actualmente.</p>
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
            onClick={() => finalizarCompra(navigate)}
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