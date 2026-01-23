import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const projects = [
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
    duration: "3 weeks",
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

const WorkShowcase = () => {
  const handleProjectClick = (github: string) => {
    window.open(github, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="work" className="section-padding">
      <div className="section-container">
        <div className="mb-12">
          <span className="section-eyebrow">// projects</span>
          <h2 className="section-title">Production Systems</h2>
          <p className="section-subtitle">
            Real automation projects with measurable business impact.
          </p>
        </div>

        <StaggerContainer className="space-y-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.div 
                onClick={() => handleProjectClick(project.github)}
                className="card-project group"
                whileHover={{ x: 4 }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
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
        <AnimatedSection delay={0.3} className="mt-12 text-center">
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
  );
};

export default WorkShowcase;