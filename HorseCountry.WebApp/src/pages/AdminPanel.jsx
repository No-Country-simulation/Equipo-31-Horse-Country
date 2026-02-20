import { useState, useEffect } from 'react';

const AdminPanel = () => {
  // 1. Cambiamos el estado para manejar el objeto de paginación (igual que en HorseGrid)
  const [paginationData, setPaginationData] = useState({ items: [], totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // 2. useEffect corregido con Template Literals (``)
  useEffect(() => {
    const fetchHorses = async () => {
      setLoading(true);
      try {
        // IMPORTANTE: Se usan backticks (`) para que ${currentPage} funcione
        const response = await fetch(`http://localhost:5233/api/horses?page=${currentPage}&pageSize=8`);
        const data = await response.json();
        
        // Guardamos el objeto completo que trae .items y .totalPages
        setPaginationData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar caballos:", error);
        setLoading(false);
      }
    };

    fetchHorses();
  }, [currentPage]); // Se vuelve a ejecutar cuando cambias de página

  const handleStatusChange = async (id, nuevoStatusId) => {
    try {
      const response = await fetch(`http://localhost:5233/api/horses/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ 
          statusId: parseInt(nuevoStatusId) 
        })
      });

      if (response.ok) {
        // Actualizamos paginationData.items para reflejar el cambio en la tabla
        setPaginationData(prev => ({
          ...prev,
          items: prev.items.map(h => h.id === id ? { ...h, statusId: parseInt(nuevoStatusId) } : h)
        }));
        alert("Estado actualizado con éxito");
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  if (loading) return <div className="p-8 text-center">Cargando panel...</div>;

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-8">
      <h1 className="text-3xl font-bold text-[#5D2E0A] mb-8">Panel de Administración</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="bg-[#8B4513] text-white">
              <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase">Caballo</th>
              <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase">Raza / Color</th>
              <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase">Estado Actual</th>
              <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* 3. Mapeamos desde paginationData.items */}
            {paginationData.items && paginationData.items.map((horse) => (
              <tr key={horse.id} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="px-5 py-5 text-sm">
                  <p className="text-gray-900 font-bold">{horse.name}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                  <p className="text-gray-600">{horse.breed?.description || 'N/A'}</p>
                  <p className="text-xs text-gray-400">{horse.color?.description}</p>
                </td>
                <td className="px-5 py-5 text-sm">
                  <select 
                    value={horse.statusId}
                    onChange={(e) => handleStatusChange(horse.id, e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-700 py-1 px-3 rounded focus:ring-2 focus:ring-[#8B4513]"
                  >
                    <option value="1">Disponible</option>
                    <option value="2">Vendido</option>
                    <option value="3">Reservado</option>
                  </select>
                </td>
                <td className="px-5 py-5 text-sm">
                  <button className="text-blue-600 hover:text-blue-900 font-medium mr-4">Editar</button>
                  <button className="text-red-600 hover:text-red-900 font-medium">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Controles de paginación (opcional pero recomendado) */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-[#8B4513] text-white rounded disabled:opacity-30"
        >
          Anterior
        </button>
        <span className="font-bold text-[#5D2E0A]">Página {currentPage} de {paginationData.totalPages}</span>
        <button 
          disabled={currentPage === paginationData.totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-[#8B4513] text-white rounded disabled:opacity-30"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;