import { useParams } from "react-router-dom";
import { horses } from "../data/horses";
import {  Container, Typography } from "@mui/material";

import HorseCard from "../componentes/HorseCard";

const HorseDetail = () => {
    const { id } = useParams();

    const horse = horses.find((h) => h.id === Number(id));

    if (!horse) {
        return <Typography>Caballo no encontrado</Typography>;
    }
    return (
        <Container sx={{ mt: 10 }}>
          <HorseCard horse={horse} />
        </Container>
    );
};


export default HorseDetail
