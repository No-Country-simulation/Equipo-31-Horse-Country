import Hero from "../componentes/Hero";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >
            <Hero />
        </Box>
    );
};

export default Home;
