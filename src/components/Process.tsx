const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze business workflows, identify pain points, and define automation opportunities."
  },
  {
    number: "02",
    title: "Design",
    description: "Architect scalable automation logic with clear data flows and error handling."
  },
  {
    number: "03",
    title: "Implement",
    description: "Build, test, and optimize systems with documentation and ongoing support."
  }
];

const Process = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            A structured approach to delivering reliable automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="mb-6">
                <span className="text-6xl font-semibold text-primary/10">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-1/2 border-t border-dashed border-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
