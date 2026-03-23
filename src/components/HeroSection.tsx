import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-light opacity-60 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-light opacity-40 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Avaliado 4.9/5 por mais de 2.000 pacientes
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-foreground mb-6">
              Seu Sorriso,{" "}
              <span className="text-gradient">Nossa Paixão</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed font-body">
              Experimente um atendimento odontológico excepcional em um ambiente confortável e moderno.
              De limpezas de rotina a procedimentos estéticos avançados — cuidamos do seu sorriso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base px-8 h-14 rounded-full">
                <a href="#contact">
                  Agende Sua Visita
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-14 rounded-full">
                <a href="#services">Conheça os Serviços</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
              {[
                { value: "15+", label: "Anos de Experiência" },
                { value: "10k+", label: "Pacientes Felizes" },
                { value: "25+", label: "Dentistas Especialistas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Clínica odontológica moderna com cadeira confortável e iluminação natural"
                width={1920}
                height={1080}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-5 shadow-elevated border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <Star size={20} className="fill-primary text-primary" />
                </div>
                <div>
                  <p className="font-display text-lg text-foreground">Mais Bem Avaliada</p>
                  <p className="text-xs text-muted-foreground">Clínica Odontológica 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
