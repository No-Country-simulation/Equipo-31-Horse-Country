import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './componentes/NavBar'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App
