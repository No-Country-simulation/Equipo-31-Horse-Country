import HorseGrid from "../componentes/HorseGrid";
import { useLocation } from "react-router-dom";

const Catalogo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";


  return (
    <div className="min-h-screen bg-cream"> 
      <div className="container mx-auto px-4 py-4">
        {/**<h1 className="text-4xl font-bold text-[#3d2817]  text-center">
          Catálogo Completo
        </h1> */}
        
       
        <HorseGrid initialSearch={initialSearch}/>
      </div>
    </div>
  );
};

export default Catalogo;