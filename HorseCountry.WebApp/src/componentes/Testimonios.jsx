const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Juan Pérez",
      comentario:
        "Excelente atención y caballos de primera calidad. Todo el proceso fue transparente y profesional.",
      estrellas: 5,
    },
    {
      nombre: "María González",
      comentario:
        "Encontré el caballo perfecto para mi hija. La descripción coincidía exactamente con la realidad.",
      estrellas: 5,
    },
    {
      nombre: "Carlos Romero",
      comentario:
        "Muy buena experiencia. El equipo respondió todas mis dudas y el servicio fue impecable.",
      estrellas: 4,
    },
  ];

  return (
    <section className="py-16 bg-[#f5f5dc] text-[#3d2817]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Testimonios</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Estrellas */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Comentario */}
              <p className="italic mb-4">"{t.comentario}"</p>

              {/* Nombre */}
              <h4 className="font-semibold text-lg">{t.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;