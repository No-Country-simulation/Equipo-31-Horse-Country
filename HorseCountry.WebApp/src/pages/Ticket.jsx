import { Link } from 'react-router-dom';

const Ticket = ({ compraData }) => {
  if (!compraData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-gray-600 mb-4">No hay información de compra reciente.</p>
        <Link to="/catalogo" className="bg-[#3d2817] text-white px-6 py-2 rounded-lg">
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-10 shadow-2xl border-t-8 border-green-500 w-full max-w-md text-center rounded-b-xl">
        <h2 className="text-2xl font-black mb-2 text-gray-800">HORSE COUNTRY</h2>
        <p className="text-gray-500 text-sm mb-6">Comprobante de Reserva</p>
        
        <div className="border-y border-dashed border-gray-300 py-4 my-4 space-y-2">
          {compraData.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm text-gray-700">
              <span>{item.name}</span>
              <span className="font-bold">${item.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between font-bold text-xl mb-8 text-gray-900">
          <span>TOTAL</span>
          <span>${compraData.total.toLocaleString()}</span>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => window.print()} 
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
          >
            🖨️ Imprimir Ticket
          </button>

          {/* BOTÓN PARA VOLVER AL CATÁLOGO */}
          <Link 
            to="/catalogo" 
            className="block w-full bg-[#3d2817] hover:bg-[#d4af37] text-white hover:text-[#3d2817] py-3 rounded-lg font-bold transition-all duration-300 shadow-md"
          >
            Volver al Catálogo
          </Link>
        </div>

        <p className="text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
          Gracias por su compra
        </p>
      </div>
    </div>
  );
};

export default Ticket;