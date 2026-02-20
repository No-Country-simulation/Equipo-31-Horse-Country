import { useState, useEffect } from 'react';

const AltaCaballo = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    breedId: 1,
    colorId: 1,
    genderId: 4,
    statusId: 1

  });

const [breeds, setBreeds] = useState([]); // Estado para las razas de la DB
const [colors, setColors] = useState([]); // Agregado para evitar errores de FK
const [genders, setGenders] = useState([]); // Agregado para evitar errores de FK
useEffect(() => {
    // Cargar Razas
    fetch('http://localhost:5233/api/breeds') 
      .then(res => res.json())
      .then(data => setBreeds(data))
      .catch(err => console.error("Error razas:", err));

    // Cargar Colores
    fetch('http://localhost:5233/api/colors') 
      .then(res => res.json())
      .then(data => setColors(data))
      .catch(err => console.error("Error colores:", err));

    // Cargar Géneros
    fetch('http://localhost:5233/api/genders') 
      .then(res => res.json())
      .then(data => setGenders(data))
      .catch(err => console.error("Error géneros:", err));
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Construimos el objeto asegurando los tipos de datos correctos
  const horseData = {
    name: formData.name,
    description: formData.description, 
    price: parseFloat(formData.price) || 0,
    // Forzamos que sean números enteros. Si el select está vacío, manda 1 (o el ID que tengas en tu DB)
    breedId: parseInt(formData.breedId) || 6, 
    colorId: parseInt(formData.colorId) || 6,
    genderId: parseInt(formData.genderId) || 4,
    statusId: 1 // Siempre arranca como Disponible
  };

  try {
    const response = await fetch('http://localhost:5233/api/horses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Si usas autenticación, no olvides el token
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(horseData) // Enviamos el objeto procesado
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
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
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
        <button type="submit" className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-bold">
          Publicar Caballo
        </button>
      </form>
    </div>
  );
};
export default AltaCaballo;