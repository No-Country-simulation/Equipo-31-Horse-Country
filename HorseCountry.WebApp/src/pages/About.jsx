import veterinaria from '../assets/personal/veterinaria.jpg'
import entrenador from '../assets/personal/entrenador.jpg'
import establo from '../assets/personal/establo.jpg'
import directora from '../assets/personal/directora.jpg'



const About = () => {
    const staff = [
        {
            name: "Lucía Fernández",
            role: "Directora del Rancho",
            description:
                "Más de 15 años liderando programas de cría y selección de caballos deportivos.",
            image: directora
        },
        {
            name: "Julián Romero",
            role: "Entrenador Principal",
            description:
                "Especialista en doma racional y preparación de caballos para salto y adiestramiento.",
            image: entrenador
        },
        {
            name: "Carla Méndez",
            role: "Veterinaria",
            description:
                "Responsable de la salud, nutrición y bienestar de todos los ejemplares del rancho.",
            image: veterinaria
        },
        {
            name: "Santiago López",
            role: "Encargado de Establo",
            description:
                "Coordina el cuidado diario, manejo y rutinas de descanso de los caballos.",
            image: establo
        },
    ];
    const brands = [
        { name: "Elite Tack Co.", description: "Equipamiento premium para caballos y jinetes." },
        { name: "Golden Fields Feed", description: "Alimentos balanceados de alta calidad." },
        { name: "Equus Genetics", description: "Asesoría en genética y reproducción equina." },
    ];

    return (
        <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto space-y-16">
            <section>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Sobre Horse Country
                </h1>
                <p className="text-lg md:text-xl text-oscuro/80 leading-relaxed">
                    Horse Country es un rancho dedicado a la cría, selección y venta de caballos de élite. Ubicados en el corazón de la campiña, combinamos tradición, genética de primer nivel y un cuidado exhaustivo de cada ejemplar para garantizar animales sanos, nobles y preparados para alto rendimiento deportivo y recreativo.
                </p>
            </section>
            {/** Sección de equipo */}
            <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">
                    Nuestro equipo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staff.map((person) => (
                        <div
                            key={person.name}
                            className="bg-cream/60 border border-secondary/20 rounded-xl p-4 shadow-sm flex flex-col items-center text-center"
                        >

                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-35 h-50 md:w-50 object-cover rounded-full border-4 border-secondary/40 shadow-md mb-4"
                            />

                            <h3 className="text-lg font-bold text-oscuro">{person.name}</h3>
                            <p className="text-sm text-secondary font-semibold mb-2">
                                {person.role}
                            </p>
                            <p className="text-sm text-oscuro/80">{person.description}</p>
                        </div>
                    ))}
                </div>

            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-center lg:text-left">

                {/* Info */}
                <div >
                    <h2 className="text-2xl font-semibold text-primary mb-4">
                        Dónde estamos
                    </h2>

                    <p className="text-oscuro/80 mb-4 ">
                        Rancho Horse Country <br />
                        Camino de las Praderas 123 <br />
                        28000 – Campo del Sur
                    </p>

                    <p className="text-oscuro/80 mb-2">
                        <span className="font-semibold">Email:</span> contacto@horsecountry.com
                    </p>

                    <p className="text-oscuro/80 mb-2">
                        <span className="font-semibold">Teléfono:</span> +34 600 123 456
                    </p>
                </div>

                {/* Mapa */}
                <div className="p-4 w-full h-64 md:h-80 rounded-xl overflow-hidden border border-secondary/30 shadow-md ">
                    <iframe
                        title="Mapa Horse Country"
                        src="https://www.google.com/maps/embed?pb=!1m18..."
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>

            </section>
            {/** Sección de marcas y aliados */}
            <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">
                    Marcas y aliados
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="bg-white/70 border border-secondary/20 rounded-xl p-4 text-center shadow-sm"
                        >
                            <p className="font-bold text-oscuro">{brand.name}</p>
                            <p className="text-sm text-oscuro/70 mt-1">{brand.description}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default About