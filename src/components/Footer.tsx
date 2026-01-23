import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight, Linkedin, Instagram, Github } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ankitmaurya4681", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/techlover._.ig", icon: Instagram, label: "Instagram" },
  { href: "https://github.com/parnika-sa", icon: Github, label: "GitHub" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    services: [
      { label: "Process Automation" },
      { label: "Sales Operations" },
      { label: "Backend Systems" },
      { label: "Data Integration" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container">
        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              Ankit<span className="text-accent">.</span>Maurya
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Automation & Backend Operations Specialist helping businesses scale 
              through efficient systems and intelligent automation.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a 
                href="mailto:expertankitmaurya@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>expertankitmaurya@gmail.com</span>
              </a>
              <a 
                href="tel:+917268930700" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 7268930700</span>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.label}>
                  <span className="text-muted-foreground">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Built by <span className="text-foreground font-medium">Ankit Maurya</span>. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            Let's work together
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
