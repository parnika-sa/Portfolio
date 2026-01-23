import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Instagram, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ankitmaurya4681", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/techlover._.ig", icon: Instagram, label: "Instagram" },
  { href: "https://github.com/parnika-sa", icon: Github, label: "GitHub" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
        ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="section-container">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-0">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Ankit<span className="text-accent">.</span>Maurya
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link px-4 py-2 ${
                  location.pathname === link.href ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
            <ThemeToggle />
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU (OVERLAY, NOT PUSH) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-[90]
                       lg:hidden border-t border-border
                       bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2 py-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors
                    ${location.pathname === link.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex justify-center gap-4 py-4 mt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border bg-card
                               text-muted-foreground hover:text-foreground
                               hover:border-accent/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn-primary text-sm py-3 text-center mt-2"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
