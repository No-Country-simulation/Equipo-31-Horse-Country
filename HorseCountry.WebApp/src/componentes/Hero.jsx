import { Box, Typography, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const intervalRef = useRef(null);

    const heroImages = [
        {
            url: "https://images.unsplash.com/photo-1551892884-0fbf2ef25b89?w=1600&q=80",
            title: "Caballos de Élite",
            subtitle: "Descubre nuestra selección de caballos premium",
        },
        {
            url: "https://images.unsplash.com/photo-1681453729024-9ac2775159b8?w=1600&q=80",
            title: "Calidad Garantizada",
            subtitle: "Más de 20 años de experiencia en cría equina",
        },
        {
            url: "https://images.unsplash.com/photo-1635184453208-f88730b94754?w=1600&q=80",
            title: "Asesoramiento Profesional",
            subtitle: "Te ayudamos a encontrar tu compañero perfecto",
        },
    ];

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? heroImages.length - 1 : prev - 1
        );
        startAutoSlide();
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === heroImages.length - 1 ? 0 : prev + 1
        );
        startAutoSlide();
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "80vh",
                overflow: "hidden",
            }}
        >
            {/* Imagen de fondo */}
            <Box
                component="img"
                src={heroImages[currentIndex].url}
                alt={heroImages[currentIndex].title}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    px: 2,
                    gap: 2,
                    background: "rgba(0,0,0,0.35)",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        color: "background.default",
                        fontSize: { xs: "2rem", md: "3.5rem" },
                    }}
                >
                    {heroImages[currentIndex].title}
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        color: "secondary.main",
                        fontSize: { xs: "1rem", md: "1.5rem" },
                    }}
                >
                    {heroImages[currentIndex].subtitle}
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={() => navigate("/catalogo")}
                    >
                        Explorar Catálogo
                    </Button>

                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        onClick={() => navigate("/catalogo")}
                    >
                        Pon un anuncio
                    </Button>
                </Box>
            </Box>

            {/* Botones de navegación */}
            <IconButton
                onClick={prevSlide}
                sx={{
                    position: "absolute",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "white",
                }}
            >
                <ChevronLeft />
            </IconButton>

            <IconButton
                onClick={nextSlide}
                sx={{
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "white",
                }}
            >
                <ChevronRight />
            </IconButton>
        </Box>
    );
};

export default Hero;
