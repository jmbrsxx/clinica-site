import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Profissionais odontológicos certificados",
  "Imagem digital e escaneamento 3D de ponta",
  "Opções de sedação para pacientes ansiosos",
  "Consultas de emergência no mesmo dia",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square">
                <span className="font-display text-4xl text-primary">15+</span>
                <span className="text-sm text-muted-foreground mt-2">Anos de Excelência</span>
              </div>
              <div className="bg-gradient-primary rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square">
                <span className="font-display text-4xl text-primary-foreground">98%</span>
                <span className="text-sm text-primary-foreground/80 mt-2">Satisfação dos Pacientes</span>
              </div>
              <div className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square border border-border">
                <span className="font-display text-4xl text-foreground">25+</span>
                <span className="text-sm text-muted-foreground mt-2">Dentistas Especialistas</span>
              </div>
              <div className="bg-primary-light rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-square">
                <span className="font-display text-4xl text-primary">10k+</span>
                <span className="text-sm text-muted-foreground mt-2">Sorrisos Restaurados</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 block">
              Sobre a DentaCare
            </span>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6">
              Onde Tecnologia Encontra Compaixão
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Na DentaCare, acreditamos que todos merecem um sorriso saudável e bonito. Nossa equipe combina
              tecnologia avançada com cuidado genuíno para proporcionar experiências odontológicas confortáveis,
              eficientes e transformadoras.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
