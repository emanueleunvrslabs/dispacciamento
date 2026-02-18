import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, ArrowRight, MapPin, Heart } from "lucide-react";

const footerLinks = {
  Offerte: [
    { label: "Luce Casa", href: "#pricing" },
    { label: "Gas Casa", href: "#pricing" },
    { label: "Luce + Gas", href: "#pricing" },
    { label: "Business", href: "#pricing" }
  ],
  Servizi: [
    { label: "Area Clienti", href: "#" },
    { label: "Bolletta Online", href: "#" },
    { label: "Autolettura", href: "#" },
    { label: "Voltura", href: "#" }
  ],
  Azienda: [
    { label: "Chi Siamo", href: "#" },
    { label: "Contatti", href: "#contact" },
    { label: "Lavora con Noi", href: "#" },
    { label: "Sostenibilità", href: "#" }
  ],
  Legale: [
    { label: "Privacy Policy", href: "#" },
    { label: "Condizioni Contrattuali", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ]
};

export const Footer = () => {
  return (
    <footer id="contact" className="relative pt-32 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.a 
              href="#" 
              className="text-3xl font-bold text-primary mb-4 block"
              whileHover={{ scale: 1.02 }}
            >
              OK Energia
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Il tuo fornitore di luce e gas 100% green. Bollette chiare, prezzi trasparenti, assistenza sempre disponibile.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Milano, Italia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@okenergia.it</span>
              </div>
            </div>

            {/* Social - Liquid Glass buttons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="w-5 h-5 text-foreground/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-block"
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} OK Energia S.r.l. - P.IVA 01234567890. Tutti i diritti riservati.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            Sviluppato con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> da{" "}
            <a 
              href="https://www.unvrslabs.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Unvrs Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
