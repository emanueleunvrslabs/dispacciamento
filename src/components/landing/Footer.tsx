import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-6 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="liquid-glass rounded-full px-6 py-3 flex flex-wrap items-center justify-center gap-x-2 text-sm text-muted-foreground">
          <span>
            <span className="text-primary font-semibold">Dispacciamento</span>
            {" — un servizio "}
            <span className="text-primary italic">energizzo</span>
            {" by UNVRS Labs"}
          </span>
          <span className="hidden sm:inline">|</span>
          <span>© {new Date().getFullYear()} UNVRS Labs Limited</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span className="hidden sm:inline">|</span>
          <span>Non affiliato ad ARERA</span>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/energizzo.it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/111630917" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
