import { Link } from "react-router-dom";
import { ArrowRight, Github, Download, Terminal, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkShowcase from "@/components/WorkShowcase";
import TypingText from "@/components/TypingText";
import TechStackIcons from "@/components/TechStackIcons";

const heroTypingPhrases = [
  "Automating Broken Workflows",
  "Scaling Operations Without Headcount",
  "Production-Grade Automation Systems",
  "Eliminating Manual Data Entry",
  "Building Reliable Backend Pipelines",
];

const services = [
  {
    title: "Process Automation",
    description: "Eliminate repetitive tasks with reliable automated workflows.",
    path: "/services#process-automation",
  },
  {
    title: "Sales Operations",
    description: "Automate lead capture, qualification, and follow-up sequences.",
    path: "/services#sales-operations",
  },
  {
    title: "Backend Systems",
    description: "Build and maintain infrastructure for production workloads.",
    path: "/services#backend-systems",
  },
  {
    title: "Data Integration",
    description: "Connect systems and build automated data pipelines.",
    path: "/services#data-integration",
  },
];

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <PageTransition>
        <main>

          {/* HERO SECTION — FIXED (NO GRID / NO BIG GLOW) */}
          <section className="relative min-h-[85vh] flex items-center overflow-hidden">

            <div className="section-container relative z-10">
              <div className="max-w-3xl py-16 lg:py-24">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-accent/30 text-accent text-sm font-mono">
                    <Terminal className="w-4 h-4" />
                    Available for new projects
                  </span>
                </motion.div>

                {/* Typing Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-6"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                    <span className="text-accent">
                      <TypingText phrases={heroTypingPhrases} />
                    </span>
                  </h1>
                </motion.div>

                {/* Credibility Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="code-block mb-8 inline-flex items-start gap-3 max-w-full"
                >
                  <Zap className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span className="font-mono text-sm break-words">
                    <span className="text-accent">10,000+</span> hours automated • 
                    <span className="text-accent"> 99%</span> uptime • 
                    <span className="text-accent"> 3+</span> production systems
                  </span>
                </motion.div>

                {/* Hero Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl"
                >
                  Automation & Backend Operations Specialist building production-grade systems 
                  that eliminate inefficiencies and scale with your business.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="btn-primary">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link to="/work" className="btn-secondary">
                    View My Work
                  </Link>

                  <a 
                    href="/resume.pdf" 
                    download="Ankit_Maurya_Resume.pdf"
                    className="btn-ghost"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </motion.div>

              </div>
            </div>
          </section>

          {/* WHAT I DO */}
          <section className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// services</span>
                <h2 className="section-title">What I Do</h2>
                <p className="section-subtitle">
                  Specialized in operational efficiency and scalable automation.
                </p>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <StaggerItem key={service.title}>
                    <Link to={service.path}>
                      <motion.div 
                        className="card-terminal group cursor-pointer"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </span>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedSection delay={0.3} className="mt-10">
                <Link to="/services" className="btn-ghost group">
                  View all services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </section>

          {/* WORK SHOWCASE */}
          <WorkShowcase />

          {/* TOOLS */}
          <section className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header text-center">
                <span className="section-eyebrow">// tech_stack</span>
                <h2 className="section-title">Tools & Technology</h2>
                <p className="section-subtitle mx-auto">
                  Click any tool to learn more about it.
                </p>
              </AnimatedSection>

              <TechStackIcons />
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding-lg">
            <div className="section-container">
              <AnimatedSection className="max-w-2xl mx-auto text-center">
                <h2 className="section-title mb-4">
                  Ready to automate your workflow?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how automation can reduce your operational overhead.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary">
                    Start a Conversation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="https://github.com/parnika-sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <Github className="w-4 h-4" />
                    View GitHub
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Home;
