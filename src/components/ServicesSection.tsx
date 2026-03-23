import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, Stethoscope, HeartPulse, Scan } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Tratamentos profissionais de clareamento que iluminam seu sorriso em até 8 tons em uma única sessão.",
  },
  {
    icon: Shield,
    title: "Implantes Dentários",
    description: "Substituições permanentes e naturais de dentes utilizando tecnologia de implantes de titânio de última geração.",
  },
  {
    icon: Smile,
    title: "Odontologia Estética",
    description: "Facetas, restaurações e transformações do sorriso para você ter a confiança que merece.",
  },
  {
    icon: Stethoscope,
    title: "Consultas Gerais",
    description: "Exames orais completos, limpezas e cuidados preventivos para manter sua saúde bucal a longo prazo.",
  },
  {
    icon: HeartPulse,
    title: "Tratamento de Canal",
    description: "Tratamentos de canal sem dor utilizando técnicas modernas e anestesia avançada para seu conforto.",
  },
  {
    icon: Scan,
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos tradicionais para alinhar seus dentes e corrigir sua mordida.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-subtle relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Cuidado Odontológico Completo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            De consultas de rotina a procedimentos avançados, oferecemos um espectro completo de serviços odontológicos sob medida para suas necessidades.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
