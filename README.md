🐴 Horse Country – Equipo 31 (No Country)
Aplicación fullstack desarrollada para la simulación No Country, orientada a la compra, visualización y gestión de ejemplares equinos de élite.
Incluye frontend en React + Vite y backend en .NET 10 + PostgreSQL.

🐎 FRONTEND
Aplicación web construida con React + Vite + TailwindCSS, enfocada en una experiencia visual premium y responsive.

🚀 Tecnologías utilizadas
- React 18
- Vite
- TailwindCSS
- React Router
- Context API
- Fetch API
- YouTube Embed
- Diseño responsive mobile-first

📦 Requisitos previos
Asegurate de tener instalado:
✔ Node.js (v18 o superior)
https://nodejs.org/
✔ npm
Incluido con Node.

🖥️ Instalación y ejecución del Frontend
Cloná el repositorio:
git clone https://github.com/No-Country-simulation/Equipo-31-Horse-Country.git


Entrá a la carpeta del frontend:
cd Equipo-31-Horse-Country/HorseCountry.WebApp


Instalá dependencias:
npm install


Ejecutá el servidor de desarrollo:
npm run dev


La aplicación estará disponible en:
http://localhost:5173



📁 Estructura del proyecto
HorseCountry.WebApp/
 ├── src/
 │   ├── assets/         # Imágenes y recursos
 │   ├── components/     # Componentes reutilizables
 │   ├── pages/          # Páginas principales (Home, Catálogo, Detalle, Carrito)
 │   ├── context/        # Context API (carrito, etc.)
 │   ├── hooks/          # Hooks personalizados
 │   └── App.jsx         # Configuración de rutas
 ├── index.html
 └── vite.config.js



🧪 Funcionalidades principales del Frontend
- Catálogo de caballos con paginación
- Detalle del ejemplar con:
- Galería de imágenes
- Video embebido de YouTube
- Ficha técnica completa
- Botón para descargar PDF
- Botón para comprar / agregar al carrito
- Carrito persistente
- Diseño responsive para móvil, tablet e iPad
- Estética premium con TailwindCSS

🐎 BACKEND
(Sección completada por el responsable del backend)
Backend desarrollado en .NET 10 con Entity Framework Core y PostgreSQL.

🏗️ Estructura del Proyecto
HorseCountry.API/
 ├── Controllers/        # Endpoints HTTP
 ├── Persistence/
 │   ├── Context/        # AppDbContext
 │   ├── Entities/       # Modelos (Horse, Breed, Status, Color, Gender)
 │   ├── Migrations/     # Historial de cambios en BD
 ├── DTOs/               # Data Transfer Objects
 └── Program.cs



🚀 Endpoints Principales
🐴 Caballos (Horses)
- GET /api/horses?page=1&pageSize=8 → catálogo paginado
- GET /api/horses/{id} → detalle por ID
- PUT /api/horses/{id} → actualización completa del ejemplar
📚 Maestros (Auxiliares)
- GET /api/statuses
- GET /api/breeds
- GET /api/colors

🛠️ Tecnologías Clave
- .NET 10
- Entity Framework Core
- Npgsql (driver PostgreSQL)
- JWT para autenticación del panel admin
- CORS configurado para Vite (5173)

⚠️ Consideraciones Importantes del Modelo
- IDs: tipo Guid
- Precios: decimal
- Fechas: DateTime
- PUT: requiere enviar el objeto completo para evitar sobrescrituras con null/0

📥 Instalación y Setup del Backend
Configurar cadena de conexión en appsettings.json.
Ejecutar migraciones:
dotnet ef database update


Iniciar servidor:
dotnet run



🤝 Equipo
Proyecto desarrollado por Equipo 31 – No Country Simulation
Trabajo colaborativo entre frontend, backend y QA.
* QA Tester: Samanta Ramos Podadera
- Backend: Cristian Maida
- Frontend: Martín Salvador


📝 Licencia
Proyecto académico – uso libre para fines educativos.