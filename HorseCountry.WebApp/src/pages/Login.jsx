import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Credenciales de prueba definidas según tu solicitud
  const testUsers = [
    { email: 'comprador@test.com', pass: '123456', role: 'Comprador' },
    { email: 'vendedor@test.com', pass: '123456', role: 'Vendedor' },
    { email: 'admin@horsetrust.com', pass: 'admin123', role: 'ADMIN' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Buscar si los datos ingresados coinciden con algún usuario de prueba
    const userFound = testUsers.find(
      (u) => u.email === email && u.pass === password
    );

    if (userFound) {
      console.log(`Login exitoso como: ${userFound.role}`);
      
      // Guardamos info básica en localStorage para simular la sesión
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', userFound.role);
      localStorage.setItem('userEmail', userFound.email);

      // Redirigir al inicio
      navigate('/');
    } else {
      setError('Credenciales inválidas. Intenta con los usuarios de prueba.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#8B4513]">
        <h2 className="text-3xl font-bold text-center text-[#5D2E0A] mb-2">
          Horse Country
        </h2>
        <p className="text-center text-gray-500 mb-8">Acceso al Sistema</p>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-[#8B4513] focus:border-[#8B4513] outline-none transition"
              placeholder="admin@horsetrust.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-[#8B4513] focus:border-[#8B4513] outline-none transition"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded-md transition duration-300 shadow-md"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-md border border-dashed border-gray-300">
          <p className="text-xs font-bold text-gray-400 uppercase mb-2">Credenciales de prueba:</p>
          <p className="text-xs text-gray-600">Admin: admin@horsetrust.com / admin123</p>
          <p className="text-xs text-gray-600">Comprador: comprador@test.com / 123456</p>
          <p className="text-xs text-gray-600">Vendedor: vendedor@test.com / 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Login;