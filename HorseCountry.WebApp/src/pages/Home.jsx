import Hero from "../componentes/Hero"
import SobreNosotros from "../componentes/SobreNosotros"
import Servicios from "../componentes/Servicios"
import Testimonios from "../componentes/Testimonios"
import BarraBusquedaHome from "../componentes/BarraBusquedaHome"
const Home = ({ userRole }) => {
    return (
        <div className="min-h-screen bg-[#f5f5dc]">
            <Hero />
            {/** <BarraBusquedaHome /> */}
            <Servicios userRole={userRole} />

            <SobreNosotros />
            <Testimonios />

        </div>
    )
}
export default Home