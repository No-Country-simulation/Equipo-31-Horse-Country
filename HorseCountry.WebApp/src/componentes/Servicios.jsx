const Servicios = () => {
  return (
    <section className="py-16 bg-white text-[#3d2817]">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Compra */}
          <div className="p-8 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Compra de Caballos</h3>
            <p className="text-lg mb-4">
              Ofrecemos una selección de caballos de excelente calidad, con 
              información detallada, fotos y características para ayudarte a 
              encontrar el ejemplar ideal.
            </p>
            <a
              href="/catalogo"
              className="inline-block bg-[#3d2817] text-[#f5f5dc] px-6 py-3 rounded-lg font-semibold hover:bg-[#5a3a22] transition"
            >
              Ver catálogo
            </a>
          </div>

          {/* Venta */}
          <div className="p-8 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Venta y Publicación</h3>
            <p className="text-lg mb-4">
              Si sos dueño, podés publicar tus caballos fácilmente. Nuestro 
              sistema permite gestionar fichas, fotos y precios desde un panel 
              intuitivo y seguro.
            </p>
            <a
              href="/login"
              className="inline-block bg-[#3d2817] text-[#f5f5dc] px-6 py-3 rounded-lg font-semibold hover:bg-[#5a3a22] transition"
            >
              Publicar caballo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Servicios;