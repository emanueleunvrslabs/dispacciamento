import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, BarChart3, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="text-foreground">IL DISPACCIAMENTO</span>
            <br />
            <span className="text-foreground">CHE </span>
            <span className="gradient-text">TI SERVE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-6 leading-relaxed"
          >
            Il dispacciamento è il servizio che garantisce l'equilibrio tra domanda e offerta 
            di energia elettrica sulla rete nazionale. Gestito da Terna, coordina in tempo reale 
            la produzione, il trasporto e la distribuzione dell'energia, assicurando che ogni kilowattora 
            acquistato arrivi dove serve, quando serve.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted-foreground text-base max-w-xl mb-8 leading-relaxed"
          >
            Ottimizzare i costi di dispacciamento significa ridurre gli oneri in bolletta 
            legati a sbilanciamenti, uplift e corrispettivi di sistema — voci spesso trascurate 
            che incidono significativamente sul costo finale dell'energia per gli operatori.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="liquid-glass-card p-6 mb-8 max-w-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(158 64% 42% / 0.1) 0%, hsl(0 0% 100% / 0.06) 100%)',
              border: '1px solid hsl(158 64% 42% / 0.2)',
            }}
          >
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-semibold mb-1">Integrato nativamente per i clienti Energizzo</p>
                <p className="text-muted-foreground text-sm">
                  I clienti Energizzo hanno la gestione del dispacciamento già integrata nel software. 
                  Monitoraggio degli sbilanciamenti, analisi dei costi e ottimizzazione automatica — 
                  senza configurazioni aggiuntive.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-8"
          >
            <motion.a
              href="#dispacciamento"
              className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Scopri di più
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
              <BarChart3 className="w-4 h-4 text-primary" />
              Analisi Sbilanciamenti
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              Monitoraggio Real-time
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              ARERA Compliant
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
