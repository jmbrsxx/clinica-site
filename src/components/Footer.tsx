import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const footerLinks = {
  Serviços: ["Odontologia Geral", "Odontologia Estética", "Ortodontia", "Implantes Dentários"],
  Empresa: ["Sobre Nós", "Nossa Equipe", "Carreiras", "Blog"],
  Suporte: ["Perguntas Frequentes", "Fale Conosco", "Política de Privacidade", "Termos de Uso"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="font-display text-primary-foreground text-lg">D</span>
              </div>
              <span className="font-display text-2xl text-background">DentaCare</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm mb-6">
              Oferecendo atendimento odontológico excepcional com tecnologia de ponta e um toque de compaixão desde 2010.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-background text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/50 text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} DentaCare. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm">
            Feito com carinho pelo seu sorriso.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
