import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/landing/Footer";
import {
  BarChart3,
  FileText,
  Upload,
  Download,
  Eye,
  Trash2,
  Database,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const demoReports = [
  {
    data: "31/12/2025, 09:56",
    nomeFile: "centro-nord-1-2026-17671...",
    zona: "centro-nord",
    meseAnno: "1/2026",
  },
  {
    data: "15/01/2026, 14:22",
    nomeFile: "sud-2-2026-18432...",
    zona: "sud",
    meseAnno: "2/2026",
  },
  {
    data: "02/02/2026, 10:05",
    nomeFile: "nord-1-2026-19201...",
    zona: "nord",
    meseAnno: "1/2026",
  },
];

const Dispacciamento = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 mesh-gradient" />
      <div className="fixed inset-0 aurora-bg pointer-events-none" />
      <div className="grain-overlay" />

      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-32 pb-24 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Analisi Dispacciamento
            </h1>
            <p className="text-muted-foreground mb-10">
              Genera report e monitora lo stato dei dati importati
            </p>
          </motion.div>

          {/* Dati Disponibili */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="liquid-glass-card p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-medium">
                Dati Disponibili
              </span>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  25153
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  file XML disponibili
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  1.96 GB
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  dimensione totale
                </p>
              </div>
            </div>
          </motion.div>

          {/* Configura Analisi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="liquid-glass-card p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-medium">
                Configura Analisi
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Carica un CSV con i POD da analizzare e genera il report
            </p>

            <p className="text-sm font-semibold text-foreground mb-3">
              File CSV con POD
            </p>
            <div className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center py-12 mb-6">
              <Upload className="w-8 h-8 text-muted-foreground mb-3" />
              <button className="px-6 py-2 rounded-lg bg-secondary text-foreground font-medium text-sm hover:bg-secondary/80 transition-colors">
                Scegli File
              </button>
              <p className="text-xs text-muted-foreground mt-2">
                Nessun file selezionato
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Zona
                </p>
                <Select>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Seleziona zona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nord">Nord</SelectItem>
                    <SelectItem value="centro-nord">Centro-Nord</SelectItem>
                    <SelectItem value="centro-sud">Centro-Sud</SelectItem>
                    <SelectItem value="sud">Sud</SelectItem>
                    <SelectItem value="sicilia">Sicilia</SelectItem>
                    <SelectItem value="sardegna">Sardegna</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Mese
                </p>
                <Select>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Seleziona mese" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {new Date(2026, i).toLocaleString("it-IT", {
                          month: "long",
                        })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">
                  Anno
                </p>
                <Select>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Seleziona anno" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity">
              Avvia Analisi
            </button>
          </motion.div>

          {/* Report Generati */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="liquid-glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground font-medium">
                Report Generati
              </span>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-muted-foreground">Data</TableHead>
                    <TableHead className="text-muted-foreground">Nome File</TableHead>
                    <TableHead className="text-muted-foreground">Zona</TableHead>
                    <TableHead className="text-muted-foreground">Mese/Anno</TableHead>
                    <TableHead className="text-muted-foreground">Azioni</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoReports.map((report, i) => (
                    <TableRow key={i} className="border-border">
                      <TableCell className="text-foreground text-sm">
                        {report.data}
                      </TableCell>
                      <TableCell className="text-foreground text-sm">
                        {report.nomeFile}
                      </TableCell>
                      <TableCell className="text-foreground text-sm">
                        {report.zona}
                      </TableCell>
                      <TableCell className="text-foreground text-sm">
                        {report.meseAnno}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                            <Download className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                            <Eye className="w-4 h-4 text-muted-foreground" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dispacciamento;
