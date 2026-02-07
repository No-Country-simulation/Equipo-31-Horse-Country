
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Imágenes para el carrusel
    const heroImages = [
        {
            url: "https://images.unsplash.com/photo-1551892884-0fbf2ef25b89?w=1600&q=80",
            title: "Caballos de Élite",
            subtitle: "Descubre nuestra selección de caballos premium"
        },
        {
            url: "https://images.unsplash.com/photo-1681453729024-9ac2775159b8?w=1600&q=80",
            title: "Calidad Garantizada",
            subtitle: "Más de 20 años de experiencia en cría equina"
        },
        {
            url: "https://images.unsplash.com/photo-1635184453208-f88730b94754?w=1600&q=80",
            title: "Asesoramiento Profesional",
            subtitle: "Te ayudamos a encontrar tu compañero perfecto"
        }
    ];
    //Cambio automático de imágenes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    //Funciones para los botones
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        );
    }

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === heroImages.length - 1 ? 0 : prev + 1
        );
    }


    return (
        <section className='relative w-full h-[80vh] flex'>
            <div className='relative flex-1 overflow-hidden'>
                {/* Imagen */}
                <img
                    src={heroImages[currentIndex].url}
                    alt={heroImages[currentIndex].title}
                    className='w-full h-full object-cover transition-all duration-700'
                />
                {/* Overlay oscuro*/}
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#f5f5dc] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {heroImages[currentIndex].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[#d4af37] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                        {heroImages[currentIndex].subtitle}
                    </p>
                    <button className="px-8 py-4 bg-[#d4af37] text-[#3d2817] rounded-lg font-bold text-lg hover:bg-[#b8860b] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
                    >
                        Explorar Catálogo
                    </button>

                </div>

                {/* Caja de información adicional */}
                <div className="absolute top-80 right-8 bg-[#3d2817]/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl max-w-sm hidden lg:block border-2 border-[#d4af37]/30 z-40">
                    <h3 className="text-xl font-bold text-[#d4af37] mb-3">Bienvenido a Equino Club</h3>
                    <ul className="space-y-2 text-[#f5f5dc] text-sm">
                        <li className="flex items-start">
                            <span className="text-[#d4af37] mr-2">✓</span>
                            <span>Caballos con pedigree certificado</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#d4af37] mr-2">✓</span>
                            <span>Asesoramiento veterinario incluido</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#d4af37] mr-2">✓</span>
                            <span>Garantía de salud y bienestar</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#d4af37] mr-2">✓</span>
                            <span>Transporte seguro disponible</span>
                        </li>
                    </ul>
                </div>
                {/* Botones de navegación */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
                >
                    <ChevronRight />
                </button>


            </div>


        </section>
    );
};

export default Hero;    
