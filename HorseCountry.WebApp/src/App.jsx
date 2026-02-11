import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './componentes/NavBar'
import Catalogo from "./pages/Catalogo";
import HorseDetail from "./pages/HorseDetail";


function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/horse/:id" element={<HorseDetail />} />


            </Routes>
          </main>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App
