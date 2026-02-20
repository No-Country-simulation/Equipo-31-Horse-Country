const Footer = () => {
  return (
    <footer className="bg-[#3d2817] text-[#f5f5dc] py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Horse Country</h3>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;