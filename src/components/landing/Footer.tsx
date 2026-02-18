export const Footer = () => {
  return (
    <footer className="relative pb-8 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dispacciamento by{" "}
            <a
              href="https://www.energizzo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors font-medium"
            >
              Energizzo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
