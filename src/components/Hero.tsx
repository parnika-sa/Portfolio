import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center section-container">
      <div className="w-full py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
            Backend Operations & Automation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 animate-fade-in-up">
            Automation & Backend Operations Specialist
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in-up animate-delay-100">
            I design and implement automation systems that reduce manual work, 
            improve operational efficiency, and support business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200">
            <a href="#work" className="btn-primary gap-2">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
