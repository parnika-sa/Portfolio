import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const tools = [
  { 
    name: "n8n", 
    url: "https://n8n.io",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 17.5a1 1 0 110 2 1 1 0 010-2zm-4-6a1 1 0 110 2 1 1 0 010-2zm9 0a1 1 0 110 2 1 1 0 010-2zm-4.5-7a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    ),
    category: "Automation"
  },
  { 
    name: "Python", 
    url: "https://www.python.org",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
    category: "Development"
  },
  { 
    name: "Google Sheets", 
    url: "https://www.google.com/sheets/about/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19.5 6H16V2.5L19.5 6zM15 7V2H5.5C4.672 2 4 2.672 4 3.5v17c0 .828.672 1.5 1.5 1.5h13c.828 0 1.5-.672 1.5-1.5V7h-5zm-3 12H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V9h10v2z"/>
      </svg>
    ),
    category: "Data"
  },
  { 
    name: "REST APIs", 
    url: "https://restfulapi.net/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4z"/>
      </svg>
    ),
    category: "Integration"
  },
  { 
    name: "Web Scraping", 
    url: "https://www.selenium.dev/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    category: "Data"
  },
  { 
    name: "Webhooks", 
    url: "https://webhooks.dev/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    category: "Integration"
  },
  { 
    name: "Databases", 
    url: "https://www.postgresql.org/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 9.08c1.52.79 3.65 1.26 6 1.26s4.48-.47 6-1.26V12c0 .5-2.13 2-6 2s-6-1.5-6-2V9.08zM6 14.08c1.52.79 3.65 1.26 6 1.26s4.48-.47 6-1.26V17c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.92z"/>
      </svg>
    ),
    category: "Backend"
  },
  { 
    name: "CRM Tools", 
    url: "https://www.hubspot.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    category: "Sales"
  },
];

const TechStackIcons = () => {
  return (
    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
      {tools.map((tool) => (
        <StaggerItem key={tool.name}>
          <motion.a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="text-muted-foreground group-hover:text-accent transition-colors duration-300"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {tool.icon}
            </motion.div>
            <div className="text-center">
              <div className="font-mono text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                {tool.name}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {tool.category}
              </div>
            </div>
          </motion.a>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default TechStackIcons;
