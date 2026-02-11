

import { Card, CardMedia, CardContent, Typography, CardActions, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";







export default function HorseCard({ horse }) {
    return (
        <Card
            sx={{
                width: "100%",       // ocupa todo el ancho del grid
                maxWidth: {
                    xs: 260,   // móvil
                    sm: 300,   // tablet
                    md: 340,   // escritorio
                },
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                height: 450,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6
                }
            }}
        >
            {/* Imagen del caballo */}
            < CardMedia
                component="div"
                sx={{
                    height: {
                        xs: 160,  // móvil
                        md: 200,  // desktop
                    },
                    backgroundImage: `url(${horse.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Contenido principal */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">
                    {horse.name}
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}><Typography variant="body2" ><b>Categoría:</b> {horse.category}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Edad:</b> {horse.age} años</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Sexo:</b> {horse.sex}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Color:</b> {horse.color}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Alzada:</b> {horse.height}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Raza:</b> {horse.breed}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Precio:</b> ${horse.price}</Typography></Grid>
                    <Grid item xs={6}><Typography variant="body2"><b>Ciudad:</b> {horse.city}</Typography></Grid>
                </Grid>
            </CardContent>
            {/* Botones */}
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="small" variant="contained" color="primary" component={Link}
                    to={`/horse/${horse.id}`}>
                    Ver Detalle
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    href={horse.vetPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Veterinario PDF
                </Button>
            </CardActions>


        </Card >
    )
}