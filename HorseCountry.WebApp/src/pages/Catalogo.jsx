import HorseGrid from "../componentes/HorseGrid";

const Catalogo = () => {
  return (
    /* Agregamos bg-[#f5f5dc] para mantener el color crema de la Home */
    <div className="pt-24 min-h-screen bg-[#f5f5dc]"> 
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#3d2817] mb-2 text-center">
          Catálogo Completo
        </h1>
        <p className="text-center text-[#d4af37] mb-10 font-medium">
          Explora todos nuestros ejemplares de élite
        </p>
        <HorseGrid />
      </div>
    </div>
  );
};

export default Catalogo;