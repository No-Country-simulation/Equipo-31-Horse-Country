import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img1 from '../assets/caballos/caballo1.jpg';
import img2 from '../assets/caballos/caballo2.jpg';
import img3 from '../assets/caballos/caballo3.jpg';
import img4 from '../assets/caballos/caballo4.jpg';
import img5 from '../assets/caballos/caballo5.jpg';
import img6 from '../assets/caballos/caballo6.jpg';
import img7 from '../assets/caballos/caballo7.jpg';
import img8 from '../assets/caballos/caballo8.jpg';
import img9 from '../assets/caballos/caballo9.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];


const HorseGrid = () => {
  const [loading, setLoading] = useState(true);
  // El estado guarda el objeto completo de la API
  const [paginationData, setPaginationData] = useState({ items: [], totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5233/api/horses?page=${currentPage}&pageSize=8`)
      .then((res) => res.json())
      .then((data) => {
         // 🔥 Asignar imagen random a cada caballo
      const itemsWithImages = data.items.map(horse => ({
        ...horse,
        randomImage: images[Math.floor(Math.random() * images.length)]
      }));

      // Guardar items modificados
      setPaginationData({
        ...data,
        items: itemsWithImages
      });

      setLoading(false);
    })
    .catch((err) => {
      console.error("Error al buscar caballos:", err);
      setLoading(false);
    });
}, [currentPage]);

  if (loading) return <div className="text-center py-10">Cargando ejemplares...</div>;

  return (

    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#3d2817] mb-8 text-center">Nuestros ejemplares</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* IMPORTANTE: Usamos paginationData.items.map */}
        {paginationData.items && paginationData.items.map((horse) => (

          <div key={horse.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="h-48">
              <img
                src={horse.randomImage}
                alt={horse.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{horse.name}</h3>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                  {horse.status?.description || 'Disponible'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {horse.breed?.description} • {horse.color?.description}
              </p>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {horse.descriprtion}
              </p>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-extrabold text-blue-600">${horse.price.toLocaleString()}</span>
                <Link to={`/caballo/${horse.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Ver detalles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      <div className="flex justify-center items-center space-x-4 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-6 py-2 bg-[#3d2817] text-[#f5f5dc] rounded-lg disabled:opacity-30 hover:bg-[#d4af37] transition-colors font-bold"
        >
          Anterior
        </button>

        <span className="text-[#3d2817] font-bold">
          Página {currentPage} de {paginationData.totalPages}
        </span>

        <button
          disabled={currentPage === paginationData.totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-6 py-2 bg-[#3d2817] text-[#f5f5dc] rounded-lg disabled:opacity-30 hover:bg-[#d4af37] transition-colors font-bold"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default HorseGrid;