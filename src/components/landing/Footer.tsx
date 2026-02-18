import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dispacciamento by Energizzo. Tutti i diritti riservati.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            Sviluppato con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> da{" "}
            <a
              href="https://www.energizzo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Energizzo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
