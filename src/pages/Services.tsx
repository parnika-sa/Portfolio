import { Link } from "react-router-dom";
import { ArrowRight, Workflow, Users, Server, BarChart3, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Workflow,
    title: "Process Automation & Workflow Design",
    description: "Transform manual, repetitive tasks into efficient automated workflows that run reliably without human intervention.",
    bestFor: "Teams spending 10+ hours/week on repetitive data entry, file processing, or cross-platform updates.",
    tools: ["n8n", "Python", "APIs", "Webhooks"],
    outcomes: [
      "Eliminate repetitive manual tasks",
      "Reduce processing errors to near-zero",
      "Scale operations without headcount",
    ],
  },
  {
    icon: Users,
    title: "Sales & Lead Operations Automation",
    description: "Streamline your entire sales pipeline from lead capture to follow-up with intelligent automation.",
    bestFor: "Sales teams with inconsistent follow-ups, slow lead response times, or CRM data quality issues.",
    tools: ["CRM Platforms", "Google Sheets", "Email Automation", "Web Scraping"],
    outcomes: [
      "Instant lead response times",
      "Consistent follow-up sequences",
      "Accurate, clean pipeline data",
    ],
  },
  {
    icon: Server,
    title: "Backend System Management",
    description: "Reliable backend infrastructure that keeps your business running smoothly with proactive monitoring.",
    bestFor: "Businesses needing stable, maintainable systems for data handling, APIs, or scheduled processes.",
    tools: ["Python", "REST APIs", "Database", "n8n"],
    outcomes: [
      "Maximum system uptime",
      "Proactive issue detection",
      "Clear operational visibility",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Handling, Reporting & Integrations",
    description: "Connect your tools and build automated reporting pipelines that deliver insights when you need them.",
    bestFor: "Organizations with data scattered across multiple tools and manual report generation workflows.",
    tools: ["Google Sheets", "APIs", "Python", "n8n"],
    outcomes: [
      "Single source of truth",
      "Automated scheduled reports",
      "Real-time dashboards",
    ],
  },
];

const Services = () => {
  return (
    <div className="page-container">
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="section-padding-lg relative">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            <div className="section-container relative z-10">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="section-eyebrow"
                >
                  // services
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-6"
                >
                  Automation Solutions That{" "}
                  <span className="text-accent">Scale</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Professional automation services designed to eliminate inefficiencies, 
                  reduce manual work, and scale operations without proportionally scaling costs.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Services Detail Section */}
          <section className="section-padding">
            <div className="section-container">
              <div className="space-y-12">
                {services.map((service, index) => (
                  <AnimatedSection key={service.title}>
                    <div className="card-terminal">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-muted-foreground">
                            Service {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-xl font-semibold">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Best For */}
                        <div className="code-block">
                          <span className="code-label">[BEST FOR]</span>
                          <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                            {service.bestFor}
                          </p>
                        </div>

                        {/* Tools */}
                        <div className="code-block">
                          <span className="code-label">[TOOLS USED]</span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {service.tools.map((tool) => (
                              <span 
                                key={tool} 
                                className="px-2 py-1 bg-secondary rounded text-xs font-mono text-foreground"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="code-block">
                          <span className="code-label">[OUTCOMES]</span>
                          <ul className="space-y-1 mt-2">
                            {service.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-foreground/80">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding-lg bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="max-w-2xl mx-auto text-center">
                <h2 className="section-title mb-4">
                  Need a custom automation solution?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Every business is unique. Let's discuss your specific challenges 
                  and design an automation strategy that fits.
                </p>
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project
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

export default Services;