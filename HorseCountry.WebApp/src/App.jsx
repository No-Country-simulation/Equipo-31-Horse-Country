import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react' // Importar useState para el carrito
import './App.css'
import Home from './pages/Home'
import NavBar from './componentes/NavBar'
import Catalogo from './pages/Catalogo'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import AltaCaballo from './pages/AltaCaballo'
// Importa tus nuevos componentes (asegúrate de haber creado los archivos en /pages)
import DetalleCaballo from './pages/DetalleCaballo'
import Carrito from './pages/Carrito'
import Ticket from './pages/Ticket'

function App() {
  // --- EL RESTO DEL CÓDIGO VA AQUÍ ---
  
  // 1. Estado para almacenar los caballos en el carrito
  const [carrito, setCarrito] = useState([]);
  
  // 2. Estado para almacenar la información de la última compra realizada
  const [ultimaCompra, setUltimaCompra] = useState(null);

  // 3. Función para agregar un caballo al carrito
  const agregarAlCarrito = (horse) => {
    setCarrito([...carrito, horse]);
    alert(`${horse.name} se agregó al carrito`);
  };

  // 4. Función para procesar la compra (se usa en el componente Carrito)
  const finalizarCompra = async (navegarA) => {
    if (carrito.length === 0) return;

    try {
      // 1. Por cada caballo en el carrito, actualizamos su estado en el servidor
      // Usamos el puerto 5233 que es el que te está funcionando
      const promesasDeActualizacion = carrito.map(horse => 
        fetch(`http://localhost:5233/api/horses/${horse.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ 
            statusId: 2 // ID 2 = "Reservado" en tu base de datos
          })
        })
      );

      // Esperamos a que todas las peticiones terminen correctamente
      const respuestas = await Promise.all(promesasDeActualizacion);
      
      // Verificamos si alguna petición falló
      if (respuestas.some(res => !res.ok)) {
        throw new Error("Error al actualizar algunos estados");
      }

      // 2. Preparamos los datos para el componente Ticket
      const total = carrito.reduce((acc, item) => acc + item.price, 0);
      setUltimaCompra({
        items: carrito,
        total: total,
        fecha: new Date().toLocaleDateString(),
        nroTransaccion: Math.floor(Math.random() * 1000000)
      });

      // 3. Limpiamos el carrito local y navegamos al ticket
      setCarrito([]);
      navegarA('/ticket');

    } catch (error) {
      console.error("Fallo en la reserva:", error);
      alert("No se pudo completar la reserva. Intenta nuevamente.");
    }
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar carritoCount={carrito.length} />
        <main>
          <Routes className="pt-20">
            <Route path='/' element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/alta" element={<AltaCaballo />} />
            
            {/* Rutas con las funciones y estados pasados por props */}
            <Route 
              path="/caballo/:id" 
              element={<DetalleCaballo agregarAlCarrito={agregarAlCarrito} />} 
            />
            <Route 
              path="/carrito" 
              element={<Carrito items={carrito} finalizarCompra={finalizarCompra} />} 
            />
            <Route 
              path="/ticket" 
              element={<Ticket compraData={ultimaCompra} />} 
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App