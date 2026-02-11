import { horses } from "../data/horses";
import HorseCard from "../componentes/HorseCard";
import { Grid, Container, Typography } from "@mui/material";

const Catalogo = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: { xs: 4, md: 8 },   // menos espacio en móvil
                minHeight: "100vh",
                mt: 10,
            }}
        >            {/* Título */}
            <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: "center" }}>
                Catálogo de Caballos
            </Typography>

            {/* Grid de cards */}
            <Grid container spacing={4} justifyContent="center">
                {horses.map((horse) => (
                    <Grid
                        item
                        key={horse.id}
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{ display: "flex" }}
                    >
                        <HorseCard horse={horse} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Catalogo;
