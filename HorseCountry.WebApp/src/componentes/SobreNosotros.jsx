import imagen from '../assets/about.jpg'

const SobreNosotros = () => {
  return (
    <section className="py-16 bg-[#f5f5dc] text-[#3d2817]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Imagen */}
        <div>
          <img
            src={imagen}
            alt="Caballos en el campo"
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed mb-4">
            En <span className="font-semibold">Horse Country</span> nos dedicamos a la cría, 
            entrenamiento y venta de caballos de alto rendimiento. Nuestro compromiso es 
            ofrecer animales sanos, cuidados y con un linaje excepcional.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Contamos con un equipo apasionado por el mundo ecuestre y trabajamos cada día 
            para brindar una experiencia confiable, transparente y profesional.
          </p>

          <a
            href="/catalogo"
            className="inline-block bg-[#3d2817] text-[#f5f5dc] px-6 py-3 rounded-lg font-semibold hover:bg-[#5a3a22] transition"
          >
            Conocer más
          </a>
        </div>

      </div>
    </section>
  );
};

export default SobreNosotros;