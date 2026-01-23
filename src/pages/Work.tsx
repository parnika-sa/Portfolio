import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Workflow, Server, Code2, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

// Import project images
import leadScraperImage from "@/assets/project-lead-scraper.jpg";
import attendanceImage from "@/assets/project-attendance.jpg";
import workflowDiagram from "@/assets/workflow-diagram.jpg";

const githubProjects = [
  {
    title: "Google Maps Lead Scraper Pro",
    problem: "Manual lead collection from Google Maps was slow, inconsistent, and couldn't scale for enterprise prospecting.",
    solution: "Built a production-grade scraping system with automated data extraction, validation, and direct CRM export.",
    outcomes: [
      "10x faster lead collection",
      "5,000+ leads/day capacity",
      "99% data accuracy"
    ],
    tools: ["Python", "Selenium", "APIs", "Google Sheets"],
    duration: "4 weeks",
    timeline: "Aug 2024 – Sep 2024",
    status: "Production-ready",
    github: "https://github.com/parnika-sa/Google-Maps-Lead-Scraper-Pro"
  },
  {
    title: "Attendance Manager using Google Sheets",
    problem: "Manual attendance tracking across teams caused errors, delays, and lacked real-time visibility.",
    solution: "Developed an automated attendance system with Google Sheets backend, automatic calculations, and reporting.",
    outcomes: [
      "Zero manual tracking errors",
      "Real-time attendance visibility",
      "Automated monthly reports"
    ],
    tools: ["Google Sheets", "Apps Script", "n8n"],
    duration: "2 weeks",
    timeline: "Jul 2024 – Aug 2024",
    status: "Production-ready",
    github: "https://github.com/parnika-sa/attendance-manager-google-sheets"
  },
  {
    title: "Telus Scraper",
    problem: "Extracting structured data from telecom directories required manual effort and couldn't handle volume.",
    solution: "Created automated scraping pipeline with rate limiting, error handling, and clean data output.",
    outcomes: [
      "Automated data extraction",
      "Scalable architecture",
      "Clean, structured output"
    ],
    tools: ["Python", "BeautifulSoup", "APIs"],
    duration: "2 weeks",
    timeline: "Sep 2024 – Oct 2024",
    status: "Production-ready",
    github: "https://github.com/parnika-sa/Telus_Scraper"
  }
];

const n8nWorkflows = [
  {
    title: "Lead Routing & CRM Sync",
    description: "Automated lead qualification and distribution to sales reps based on territory, score, and availability.",
  },
  {
    title: "Webhook-Based Integrations",
    description: "Real-time data flow between web apps, databases, and notification systems.",
  },
  {
    title: "Data Enrichment Pipelines",
    description: "Automated lookup and enhancement of lead data from multiple sources.",
  },
  {
    title: "Scheduled Background Workflows",
    description: "Recurring tasks for data cleanup, reporting, and system health checks.",
  },
];

const Work = () => {
  const handleProjectClick = (github: string) => {
    window.open(github, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-container">
      <Header />
      <PageTransition>
        <main>
          {/* Hero Section */}
          <section className="section-padding-lg relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-20" />
            
            <div className="section-container relative z-10">
              <div className="max-w-3xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="section-eyebrow"
                >
                  // portfolio
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  Work That{" "}
                  <span className="text-accent">Delivers Results</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-muted-foreground leading-relaxed"
                >
                  Production automation systems, workflow integrations, and backend infrastructure. 
                  Each project built for reliability and scale.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Category 1: GitHub Projects */}
          <section id="github-projects" className="section-padding">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// category_01</span>
                <h2 className="section-title flex items-center gap-3">
                  <Github className="w-8 h-8 text-accent" />
                  GitHub Automation Projects
                </h2>
                <p className="section-subtitle">
                  Open-source automation tools built for real business problems.
                </p>
              </AnimatedSection>

              <StaggerContainer className="space-y-6">
                {githubProjects.map((project, index) => (
                  <StaggerItem key={project.title}>
                    <motion.div 
                      onClick={() => handleProjectClick(project.github)}
                      className="card-project group"
                      whileHover={{ x: 4 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-muted-foreground">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="status-badge status-production">
                            {project.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-accent transition-colors">
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">View on GitHub</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Metadata Block */}
                      <div className="code-block mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <span className="code-label">[DURATION]</span>
                          <p className="text-foreground mt-1">{project.duration}</p>
                        </div>
                        <div>
                          <span className="code-label">[TIMELINE]</span>
                          <p className="text-foreground mt-1">{project.timeline}</p>
                        </div>
                        <div>
                          <span className="code-label">[TECH STACK]</span>
                          <p className="text-foreground mt-1">{project.tools.join(", ")}</p>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <span className="code-label">[PROBLEM]</span>
                          <p className="text-muted-foreground leading-relaxed mt-2">{project.problem}</p>
                        </div>
                        <div>
                          <span className="code-label">[SOLUTION]</span>
                          <p className="text-muted-foreground leading-relaxed mt-2">{project.solution}</p>
                        </div>
                        <div>
                          <span className="code-label">[OUTCOME]</span>
                          <ul className="mt-2 space-y-1">
                            {project.outcomes.map((outcome, i) => (
                              <li key={i} className="text-accent font-medium text-sm">
                                → {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* View All Projects Button */}
              <AnimatedSection delay={0.3} className="mt-10 text-center">
                <a 
                  href="https://github.com/parnika-sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  <Github className="w-4 h-4" />
                  View all projects on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </AnimatedSection>
            </div>
          </section>

          {/* Category 2: n8n Automation Work */}
          <section id="n8n-workflows" className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// category_02</span>
                <h2 className="section-title flex items-center gap-3">
                  <Workflow className="w-8 h-8 text-accent" />
                  Workflow Automation with n8n
                </h2>
                <p className="section-subtitle">
                  Production automations handling real-world operational workflows. 
                  Built for reliability with proper error handling, logging, and monitoring.
                </p>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {n8nWorkflows.map((workflow, index) => (
                  <StaggerItem key={workflow.title}>
                    <motion.div 
                      className="group h-full p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="font-mono text-sm text-muted-foreground">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="status-badge status-active">Operational</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
                        {workflow.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {workflow.description}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Workflow Diagram */}
              <AnimatedSection delay={0.2} className="mt-10">
                <motion.div 
                  className="group p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm text-muted-foreground">05</span>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">
                      Example: Automation Workflow Architecture
                    </h3>
                  </div>
                  
                  <div className="code-block mb-6">
                    <span className="code-label">[PATTERN]</span>
                    <p className="text-sm text-muted-foreground mt-2">n8n-style workflow design for production environments</p>
                  </div>
                  
                  <div className="relative -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 overflow-hidden rounded-b-lg">
                    <motion.img
                      src={workflowDiagram}
                      alt="n8n automation workflow diagram"
                      className="w-full h-auto"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* n8n Emphasis */}
              <AnimatedSection delay={0.3} className="mt-8">
                <div className="p-6 rounded-lg border border-white/[0.08] bg-background">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-accent font-medium">Note:</span> These are real-world operational automations 
                    deployed in production environments. Each workflow includes comprehensive error handling, 
                    retry logic, and alerting for maximum reliability.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Category 3: Infrastructure & Systems Engineering */}
          <section id="infrastructure" className="section-padding">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// category_03</span>
                <h2 className="section-title flex items-center gap-3">
                  <Server className="w-8 h-8 text-accent" />
                  Backend Infrastructure & Remote System Control
                </h2>
                <p className="section-subtitle">
                  Centralized systems management and secure remote access infrastructure.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <motion.div 
                  className="group p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-sm text-muted-foreground">01</span>
                    <span className="status-badge status-production">Production</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                        MeshCentral Server Setup
                      </h3>
                      
                      <div className="code-block mb-6">
                        <span className="code-label">[CAPABILITY]</span>
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          Configured centralized server infrastructure for managing multiple systems 
                          and machines from a single control point.
                        </p>
                      </div>
                      
                      <div>
                        <span className="code-label">[OUTCOMES]</span>
                        <ul className="mt-3 space-y-2">
                          <li className="text-accent font-medium text-sm">→ Multi-system remote access</li>
                          <li className="text-accent font-medium text-sm">→ Secure encrypted connections</li>
                          <li className="text-accent font-medium text-sm">→ Centralized monitoring dashboard</li>
                          <li className="text-accent font-medium text-sm">→ Operational efficiency at scale</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-sm">
                        {/* Terminal-style visualization */}
                        <div className="rounded-lg border border-white/[0.08] bg-card p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-destructive/50" />
                            <div className="w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: 'hsl(48 96% 53%)' }} />
                            <div className="w-3 h-3 rounded-full opacity-50" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
                          </div>
                          <div className="font-mono text-xs text-muted-foreground space-y-1">
                            <p className="text-accent">$ meshcentral status</p>
                            <p>Server: <span style={{ color: 'hsl(142 71% 45%)' }}>ONLINE</span></p>
                            <p>Connected devices: <span className="text-accent">12</span></p>
                            <p>Active sessions: <span className="text-accent">3</span></p>
                            <p>Uptime: <span className="text-accent">99.9%</span></p>
                            <p className="mt-2 text-accent">$ _</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>

          {/* Category 4: Additional Technical Work */}
          <section id="additional-work" className="section-padding bg-secondary/30">
            <div className="section-container">
              <AnimatedSection className="section-header">
                <span className="section-eyebrow">// category_04</span>
                <h2 className="section-title flex items-center gap-3">
                  <Code2 className="w-8 h-8 text-accent" />
                  Additional Technical Work
                </h2>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-3 gap-6">
                <StaggerItem>
                  <motion.div 
                    className="group h-full p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-sm text-muted-foreground">01</span>
                      <Code2 className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-3 group-hover:text-accent transition-colors">Python Programs</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built multiple small-to-medium Python utilities for industry use cases. 
                      Automation scripts, data processors, and backend helpers for operational efficiency.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    className="group h-full p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-sm text-muted-foreground">02</span>
                      <Cpu className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-3 group-hover:text-accent transition-colors">AI Concepts & Practical Usage</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Strong understanding of AI fundamentals with practical experience. 
                      Currently exploring AI-assisted development workflows and LLM integrations.
                    </p>
                  </motion.div>
                </StaggerItem>

                <StaggerItem>
                  <motion.div 
                    className="group h-full p-6 lg:p-8 rounded-lg border border-white/[0.08] bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.3)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-sm text-muted-foreground">03</span>
                      <Workflow className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-3 group-hover:text-accent transition-colors">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Actively experimenting with modern AI-assisted coding and vibe coding approaches. 
                      Multi-skilled and adaptable to emerging technologies.
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* CTA Section */}
          <section className="section-padding-lg relative overflow-hidden">
            <div className="section-container relative z-10">
              <AnimatedSection className="max-w-3xl mx-auto text-center">
                <h2 className="section-title mb-6">
                  Have a similar challenge?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Let's discuss how I can help automate your operations 
                  and deliver measurable results for your business.
                </p>
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
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

export default Work;
