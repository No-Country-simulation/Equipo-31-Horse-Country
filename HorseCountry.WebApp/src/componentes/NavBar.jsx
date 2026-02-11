import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: "linear-gradient(#d4af37, #b8860b)",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#3d2817",
            }}
          >
            EC
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Equino Club
          </Typography>
        </Box>

        {/* Menú */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Inicio
          </Button>
          <Button component={Link} to="/catalogo" color="inherit">
            Catálogo
          </Button>
          <Button variant="contained" color="secondary">
            Iniciar Sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
