import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: MapPin, label: "Visite-nos", value: "Rua Exemplo, 123 - Sala 01\nBairro Centro, Cidade Exemplo - BR, 00000-000\nLocalizado em: Centro Comercial Exemplo" },
  { icon: Phone, label: "Ligue", value: "(00) 00000-0000" },
  { icon: Mail, label: "E-mail", value: "contato@exemplo.com" },
  { icon: Clock, label: "Horário de Atendimento", value: "Seg – Sex: 09h – 18h" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 block">
              Fale Conosco
            </span>
            <h2 className="text-4xl md:text-5xl text-foreground mb-6">
              Pronto Para Seu Melhor Sorriso?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Agende sua consulta hoje e dê o primeiro passo rumo a um sorriso mais saudável e brilhante.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
                  <input
                    type="text"
                    placeholder="João"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Sobrenome</label>
                  <input
                    type="text"
                    placeholder="Silva"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
                <input
                  type="email"
                  placeholder="joao@exemplo.com"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                <input
                  type="tel"
                  placeholder="(11) 91234-5678"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos sobre suas necessidades odontológicas..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button size="lg" className="w-full h-14 rounded-xl text-base">
                Solicitar Agendamento
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
