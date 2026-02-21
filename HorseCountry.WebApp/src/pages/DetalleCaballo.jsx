import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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



const DetalleCaballo = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const [horse, setHorse] = useState(null);
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    // 1. Traer caballo por ID
    fetch(`http://localhost:5233/api/horses/${id}`)
      .then(res => res.json())
      .then(data => {
        setHorse(data);

        // 2. Crear galería random de 4 imágenes
        const randomGallery = Array.from({ length: 4 }, () =>
          images[Math.floor(Math.random() * images.length)]
        );
        setGallery(randomGallery);
        setSelectedImage(randomGallery[0]);

      });
  }, [id]);




  if (!horse) return <div className="p-10 text-center">Cargando detalles...</div>;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f5f5dc] flex flex-col items-center px-4 pt-20">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

        {/* Imagen principal */}
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <img
            src={selectedImage}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-4"
          />

          {/* Miniaturas */}
          <div className="grid grid-cols-4 gap-3 w-full">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`h-20 w-full object-cover rounded-xl cursor-pointer border-2 transition 
          ${selectedImage === img ? "border-[#d4af37]" : "border-transparent"}`}
              />
            ))}
          </div>
        </div>


        {/* INFORMACIÓN - ocupa 50% en desktop */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-sm font-bold text-[#8B4513] uppercase tracking-widest">
              Ejemplar Exclusivo
            </span>
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
            "{horse.descriprtion}"
          </p>

          <div className="flex flex-col lg:flex-row items-center md:justify-between gap-4 border-t pt-6">

            <div className="text-center md:text-left">
              <p className="text-xs text-gray-400 uppercase">Precio de Inversión</p>
              <span className="text-3xl md:text-4xl font-black text-blue-600">
                ${horse.price.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => { agregarAlCarrito(horse); navigate("/carrito") }}
              className="bg-[#3d2817] hover:bg-[#d4af37] text-white hover:text-[#3d2817] 
               px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold 
               transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto"
            >
              Añadir al Carrito
            </button>

          </div>

        </div>

      </div>
      {/* VIDEO DEL CABALLO */}
      <div className="max-w-5xl w-full mx-auto mt-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-200">

        <h3 className="text-2xl font-bold text-[#3d2817] mb-6">
          Video del ejemplar
        </h3>

        <div className="relative w-full pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_mbFJGmHAAM"
            title="Video del caballo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
      {/* DESCRIPCIÓN COMPLETA */}
      <div className="max-w-5xl w-full mx-auto mt-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-[#3d2817] mb-6">
          Detalles
        </h3>

        {/* GRID DE DATOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* DESCRIPCIÓN LARGA */}
          <div>
            <h4 className="text-xl font-bold text-[#3d2817] mb-2">Descripción del ejemplar</h4>
            <p className="text-gray-700 leading-relaxed">
              {horse.longDescription || horse.descriprtion || "Este ejemplar no tiene una descripción detallada cargada."}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Edad</p>
            <p className="font-semibold text-gray-700">{horse.age || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Padre</p>
            <p className="font-semibold text-gray-700">{horse.father || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Madre</p>
            <p className="font-semibold text-gray-700">{horse.mother || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Color</p>
            <p className="font-semibold text-gray-700">{horse.color?.description}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Raza</p>
            <p className="font-semibold text-gray-700">{horse.breed?.description}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Alzada</p>
            <p className="font-semibold text-gray-700">{horse.height || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Subcategoría</p>
            <p className="font-semibold text-gray-700">{horse.subcategory || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase">Categoría</p>
            <p className="font-semibold text-gray-700">{horse.category || "No especificado"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm md:col-span-2">
            <p className="text-xs text-gray-400 uppercase">Lugar</p>
            <p className="font-semibold text-gray-700">{horse.location || "No especificado"}</p>
          </div>


        </div>

        {/* BOTONERA */}
        <div className="flex flex-col md:flex-row gap-4 m-5">

          {/* Botón PDF */}
          <button
            onClick={() => console.log("Descargar PDF veterinario")}
            className="w-full md:w-auto bg-[#3d2817] hover:bg-[#d4af37] text-white hover:text-[#3d2817]
               px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg"
          >
            Descargar PDF Veterinario
          </button>

          {/* Botón Comprar */}
          <button
            onClick={() => { agregarAlCarrito(horse); navigate("/carrito") }}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white
               px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg"
          >
            Comprar
          </button>

        </div>

      </div>

    </div>

  );
};
export default DetalleCaballo;