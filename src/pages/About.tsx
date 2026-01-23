import { Link } from "react-router-dom";
import { ArrowRight, Download, CheckCircle2, Terminal, Shield, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechStackIcons from "@/components/TechStackIcons";

const expertise = [
  {
    title: "Workflow Architecture",
    description: "Designing efficient automation flows that handle complex business logic with reliability."
  },
  {
    title: "Backend Operations",
    description: "Building and maintaining backend systems that power business-critical processes."
  },
  {
    title: "Data Integration",
    description: "Connecting disparate systems into unified data pipelines for seamless operations."
  },
  {
    title: "Systems Thinking",
    description: "Taking a holistic approach to understand how automation fits into broader business goals."
  }
];

const technicalSkills = [
  "Production-grade automation using n8n and Python",
  "API integration and webhook-based architectures",
  "CRM customization and workflow optimization",
  "Data pipelines with Google Sheets & Apps Script"
];

const philosophyPoints = [
  {
    icon: Shield,
    title: "Long-term Maintainability",
    description: "Systems built to last, not just to demo. Every project includes documentation, logging, and clear code structure."
  },
  {
    icon: Eye,
    title: "Silent Reliability",
    description: "Automation that doesn't break silently. Proper error handling, alerting, and recovery mechanisms are non-negotiable."
  },
  {
    icon: FileText,
    title: "Simplicity Over Complexity",
    description: "Automation should simplify operations, not add layers of complexity. If it's hard to maintain, it's not done right."
  }
];

const mindsetPoints = [
  "Reliability over hype — production systems that work 24/7",
  "Documentation, logging, and monitoring as defaults",
  "Building for real operations, not impressive demos",
  "Clear communication and no surprises"
];

const About = () => {
  return (
    <div className="page-container">
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="section-padding-lg relative">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            <div className="section-container relative z-10">
              <div className="max-w-3xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="section-eyebrow"
                >
                  // about
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-6"
                >
                  Ankit Maurya
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed mb-6"
                >
                  Automation & Backend Operations Specialist. I build systems that are 
                  reliable, scalable, and maintainable—not just functional.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="code-block mb-8"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I analyze existing workflows, identify inefficiencies, and design automation 
                    solutions that deliver measurable results. Every project is built with 
                    production standards: error handling, logging, and documentation included.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <a 
                    href="/resume.pdf" 
                    download="Ankit_Maurya_Resume.pdf" 
                    className="btn-primary inline-flex"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// expertise</span>
                <h2 className="section-title">Core Competencies</h2>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div 
                      className="card-terminal"
                      whileHover={{ x: 4 }}
                    >
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="section-padding">
            <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-8 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="card-terminal h-full p-8 border border-white/[0.08] bg-background transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]">
                    <span className="code-label">[TECHNICAL SKILLS]</span>
                    <ul className="space-y-4 mt-5">
                      {technicalSkills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80 leading-relaxed">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group"
                >
                  <div className="card-terminal h-full p-8 border border-white/[0.08] bg-background transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]">
                    <span className="code-label">[APPROACH]</span>
                    <div className="space-y-5 mt-5">
                      <p className="text-sm text-foreground/80 leading-[1.8]">
                        I focus on systems that genuinely solve problems—not just move 
                        complexity around. The best automation is invisible: it works 
                        reliably in the background.
                      </p>
                      <p className="text-sm text-foreground/80 leading-[1.8]">
                        Every project includes proper error handling, monitoring, and 
                        documentation. I build for the long term, not quick demos.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Automation Philosophy Section */}
          <section className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// philosophy</span>
                <h2 className="section-title">Automation Philosophy</h2>
                <p className="section-subtitle">
                  Principles that guide every system I build.
                </p>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-3 gap-4">
                {philosophyPoints.map((point) => (
                  <StaggerItem key={point.title}>
                    <motion.div 
                      className="card-terminal h-full"
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <point.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Professional Mindset Section */}
          <section className="section-padding">
            <div className="section-container">
              <motion.div 
                className="max-w-2xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="card-terminal p-8 border border-white/[0.08] bg-background transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]">
                  <span className="code-label">[PROFESSIONAL MINDSET]</span>
                  <div className="mt-5 space-y-4">
                    {mindsetPoints.map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 leading-[1.8]">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header text-center">
                <span className="section-eyebrow">// tech_stack</span>
                <h2 className="section-title">Tools & Expertise</h2>
                <p className="section-subtitle mx-auto">
                  Click any tool to learn more about it.
                </p>
              </AnimatedSection>

              <TechStackIcons />
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding-lg">
            <div className="section-container">
              <AnimatedSection className="max-w-2xl mx-auto text-center">
                <h2 className="section-title mb-4">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground mb-8">
                  Looking for reliable automation solutions? Let's discuss your project.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default About;
