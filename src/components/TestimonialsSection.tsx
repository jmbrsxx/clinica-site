import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Paciente desde 2019",
    text: "A DentaCare transformou completamente meu sorriso. A equipe foi incrivelmente profissional e me deixou à vontade durante todo o processo. Não poderia estar mais feliz com os resultados!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Paciente desde 2021",
    text: "Sempre tive medo de ir ao dentista, mas a equipe daqui mudou tudo. Eles explicaram cada etapa e garantiram que eu estivesse confortável. Um atendimento verdadeiramente excepcional.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Paciente desde 2020",
    text: "Desde o momento em que entrei, soube que era diferente. As instalações modernas, a recepção calorosa e a expertise dos dentistas — tudo superou minhas expectativas.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider uppercase text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Não acredite apenas na nossa palavra — ouça os pacientes cujas vidas ajudamos a transformar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border relative"
            >
              <Quote size={32} className="text-primary/10 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 font-body">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
