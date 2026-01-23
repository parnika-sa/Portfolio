import { Workflow, Users, Server, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Process Automation & Workflow Design",
    description: "Streamline repetitive tasks and build automated workflows that save time and reduce human error."
  },
  {
    icon: Users,
    title: "Sales & Lead Operations Automation",
    description: "Automate lead capture, qualification, and follow-up sequences to accelerate your sales pipeline."
  },
  {
    icon: Server,
    title: "Backend System Management",
    description: "Maintain and optimize backend infrastructure to ensure reliable, scalable operations."
  },
  {
    icon: BarChart3,
    title: "Data Handling, Reporting & Integrations",
    description: "Connect disparate systems and build automated reporting for data-driven decision making."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Specialized services focused on operational efficiency and scalable automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="card-professional group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
