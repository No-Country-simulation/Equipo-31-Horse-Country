import { useState, useEffect } from 'react';

const AltaCaballo = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    breedId: 1,
    colorId: 1,
    genderId: 4,
    statusId: 4

  });

const [breeds, setBreeds] = useState([]); // Estado para las razas de la DB
const [colors, setColors] = useState([]); // Agregado para evitar errores de FK
const [genders, setGenders] = useState([]); // Agregado para evitar errores de FK
useEffect(() => {
    // Cargar Razas
    fetch('https://horsecountry-master.onrender.com/api/breeds') 
      .then(res => res.json())
      .then(data => setBreeds(data))
      .catch(err => console.error("Error razas:", err));

    // Cargar Colores
    fetch('https://horsecountry-master.onrender.com/api/colors') 
      .then(res => res.json())
      .then(data => setColors(data))
      .catch(err => console.error("Error colores:", err));

    // Cargar Géneros
    fetch('https://horsecountry-master.onrender.com/api/genders') 
      .then(res => res.json())
      .then(data => setGenders(data))
      .catch(err => console.error("Error géneros:", err));
  }, []);

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Construimos el objeto asegurando los tipos de datos correctos
  const formDataToSend = new FormData();

  // ELIMINAMOS el prefijo "horseDto."
  formDataToSend.append("Name", formData.name);
  formDataToSend.append("Description", formData.description);
  formDataToSend.append("Price", parseFloat(formData.price) || 0);
  formDataToSend.append("BreedId", parseInt(formData.breedId) || 1);
  formDataToSend.append("ColorId", parseInt(formData.colorId) || 1);
  formDataToSend.append("GenderId", parseInt(formData.genderId) || 1);
  formDataToSend.append("StatusId", 4); // 4 según tu lógica de C#

  if (file) {
    // Asegúrate que en HorseDto.cs la propiedad se llame "ImageFile"
    formDataToSend.append("ImageFile", file); 
  }
  try {
    const response = await fetch('https://horsecountry-master.onrender.com/api/horses', {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/json',
        // Si usas autenticación, no olvides el token
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formDataToSend
      //body: JSON.stringify(horseData) // Enviamos el objeto procesado
    });

    if (response.ok) {
      alert("¡Caballo registrado con éxito!");
      // Opcional: limpiar el formulario aquí
    } else {
      // Si la API responde 400 o 500, capturamos el mensaje de error
      const errorData = await response.text();
      console.error("Error del servidor:", errorData);
      alert("Error al registrar: " + errorData);
    }
  } catch (error) {
    console.error("Error de red:", error);
    alert("No se pudo conectar con el servidor.");
  }
};

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl my-20">
      <h2 className="text-2xl font-bold text-[#3d2817] mb-6">Registrar Nuevo Ejemplar</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Nombre del caballo"
          className="w-full p-2 border rounded text-gray-900"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <select 
            required
            onChange={(e) => setFormData({...formData, breedId: parseInt(e.target.value)})}
            className="w-full p-2 border rounded text-gray-900"
            value={formData.breedId}
            >
            <option value="">Seleccione una raza...</option>
            {breeds.map((b) => (
                <option key={b.id} value={b.id}>{b.description}</option>
            ))}
        </select>
        {/* SELECT DE COLORES DINÁMICO */}
        <select 
          required
          onChange={(e) => setFormData({...formData, colorId: e.target.value})}
          className="w-full p-2 border rounded text-gray-900"
          value={formData.colorId}
        >
          <option value="">Seleccione un color...</option>
          {colors.map((c) => (
            <option key={c.id} value={c.id}>{c.description}</option>
          ))}
        </select>

        {/* SELECT DE GÉNEROS DINÁMICO */}
        <select 
          onChange={(e) => setFormData({...formData, genderId: e.target.value})}
          className="w-full p-2 border rounded text-gray-900"
          value={formData.genderId}
        >
          <option value="">Seleccione género...</option>
          {genders.map((g) => (
            <option key={g.id} value={g.id}>{g.description}</option>
          ))}
        </select>
        <textarea 
          placeholder="Descripción"
          className="w-full p-2 border rounded text-gray-900"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <input 
          type="number" 
          placeholder="Precio"
          className="w-full p-2 border rounded text-gray-900"
          onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
        />
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-gray-700">Foto del ejemplar:</label>
          <input 
            type="file" 
            accept="image/*" 
            className="w-full p-2 border rounded bg-gray-50 text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8B4513] file:text-white hover:file:bg-[#5d2e0d]"
            onChange={(e) => setFile(e.target.files[0])} 
          />
          {file && <p className="text-xs text-green-600">Archivo seleccionado: {file.name}</p>}
        </div>
        <button type="submit" className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-bold">
          Publicar Caballo
        </button>
      </form>
    </div>
  );
};
export default AltaCaballo;