import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Volver arriba"
      onClick={scrollToTop}
      className={`fixed bottom-6 md:bottom-30 right-6 z-9999 flex items-center justify-center p-3 rounded-full 
                  bg-primary text-cream shadow-lg transition-all duration-300 
                  hover:bg-secondary hover:shadow-xl hover:-translate-y-1
                  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}