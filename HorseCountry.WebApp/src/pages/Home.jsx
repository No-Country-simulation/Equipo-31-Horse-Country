import Hero from "../componentes/Hero"
import SobreNosotros from "../componentes/SobreNosotros"
import Servicios from "../componentes/Servicios"
import Testimonios from "../componentes/Testimonios"

const Home = () => {
    return (
        <div className="min-h-screen bg-[#f5f5dc]">
            <Hero />
            <SobreNosotros />
            <Servicios />
            <Testimonios />
            
        </div>
    )
}
export default Home