import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Demonstrated strong problem-solving skills and delivered a reliable automation solution that significantly reduced our manual workload.",
    author: "Project Stakeholder",
    role: "Operations Manager",
    note: "Sample testimonial from early project work",
  },
  {
    quote: "The automated systems are well-structured and maintainable. Clear communication throughout the project and delivered on time.",
    author: "Client Representative",
    role: "Business Owner",
    note: "Sample testimonial from early project work",
  },
  {
    quote: "Shows a genuine understanding of workflow optimization. The solution addressed our core pain points effectively.",
    author: "Team Lead",
    role: "Sales Operations",
    note: "Sample testimonial from early project work",
  },
];

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className = "" }: TestimonialsProps) => {
  return (
    <section className={`section-padding bg-secondary/30 ${className}`}>
      <div className="section-container">
        <AnimatedSection className="section-header text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Early feedback from project collaborations and stakeholders.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-premium h-full flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-accent" />
                </div>
                
                <blockquote className="text-foreground/90 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-5 mt-auto">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2 italic">
                    {testimonial.note}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
