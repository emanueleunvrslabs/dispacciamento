import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { EnergizzoCard } from "@/components/landing/EnergizzoCard";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Modern mesh gradient background */}
      <div className="fixed inset-0 mesh-gradient" aria-hidden="true" />
      
      {/* Subtle aurora effect */}
      <div className="fixed inset-0 aurora-bg pointer-events-none" aria-hidden="true" />
      
      {/* Very subtle grain for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          
          {/* SEO-rich content section for search engines and AI crawlers */}
          <section className="container mx-auto px-4 py-16 max-w-4xl" aria-label="Informazioni sul dispacciamento energetico">
            <article className="liquid-glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cos'è il <span className="gradient-text">Dispacciamento Energetico</span>?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Il dispacciamento energetico è il processo di gestione in tempo reale dell'equilibrio tra produzione e consumo 
                di energia elettrica sulla rete nazionale italiana. Questo servizio, coordinato da <strong>Terna S.p.A.</strong>, 
                è fondamentale per garantire la sicurezza e l'affidabilità del sistema elettrico nazionale.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                I <strong>costi di dispacciamento</strong> comprendono diverse voci che incidono sulla bolletta degli operatori energetici: 
                gli <strong>sbilanciamenti</strong> (differenza tra energia programmata ed effettiva), l'<strong>uplift</strong> (corrispettivo 
                per il bilanciamento del sistema), e i <strong>corrispettivi di sistema</strong> regolati dall'<strong>ARERA</strong>.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                La nostra piattaforma analizza questi costi utilizzando algoritmi di intelligenza artificiale, identificando 
                opportunità di ottimizzazione che possono portare a una <strong>riduzione media del 18%</strong> dei costi di dispacciamento.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Come funziona l'ottimizzazione</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Analisi degli sbilanciamenti</strong>: monitoraggio continuo della differenza tra energia programmata e consumata per ogni punto di prelievo (POD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Ottimizzazione dell'uplift</strong>: strategie per minimizzare l'impatto dei corrispettivi di bilanciamento sulla bolletta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Report dettagliati per zona</strong>: analisi specifiche per le zone di mercato (Nord, Centro-Nord, Centro-Sud, Sud, Sicilia, Sardegna)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Conformità ARERA</strong>: tutte le analisi sono conformi alla normativa dell'Autorità di Regolazione per Energia Reti e Ambiente</span>
                </li>
              </ul>
            </article>
          </section>
          
          <EnergizzoCard />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
