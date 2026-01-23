const tools = [
  { name: "n8n", category: "Automation" },
  { name: "Python", category: "Programming" },
  { name: "Google Sheets", category: "Data" },
  { name: "REST APIs", category: "Integration" },
  { name: "CRM Tools", category: "Sales" },
  { name: "Automation Platforms", category: "Workflow" }
];

const TechStack = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Tools & Technology</h2>
          <p className="section-subtitle">
            Reliable technologies for building scalable automation systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
            >
              <p className="font-medium text-foreground">{tool.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
