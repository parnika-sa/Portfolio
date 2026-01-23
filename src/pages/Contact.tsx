import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageTransition } from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/expertankitmaurya@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message sent",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "expertankitmaurya@gmail.com",
      href: "mailto:expertankitmaurya@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7268930700",
      href: "tel:+917268930700",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 7268930700",
      href: "https://wa.me/917268930700",
    },
  ];

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
                  // contact
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-6"
                >
                  Let's Discuss Your{" "}
                  <span className="text-accent">Workflow</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed mb-4"
                >
                  Ready to talk about automation? Tell me about your workflow challenges.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="font-mono text-sm text-accent"
                >
                  No sales pitch. Just a clear discussion about your workflow.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info Section */}
          <section className="section-padding">
            <div className="section-container">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <AnimatedSection className="lg:col-span-3">
                  <div className="card-terminal">
                    <span className="code-label">[SEND MESSAGE]</span>
                    
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-semibold mb-2">Message Sent</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          I'll respond within 24 hours.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="btn-ghost text-sm"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-input bg-background font-mono text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-input bg-background font-mono text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company <span className="text-muted-foreground">(optional)</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background font-mono text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-input bg-background font-mono text-sm focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none"
                            placeholder="Describe your workflow challenge..."
                            required
                          />
                        </div>
                        <button 
                          type="submit" 
                          className="btn-primary w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </AnimatedSection>

                {/* Contact Methods */}
                <AnimatedSection delay={0.2} className="lg:col-span-2">
                  <div className="space-y-4">
                    <span className="code-label">[DIRECT CONTACT]</span>
                    
                    <StaggerContainer className="space-y-3 mt-4">
                      {contactMethods.map((method) => (
                        <StaggerItem key={method.label}>
                          <a
                            href={method.href}
                            target={method.label === "WhatsApp" ? "_blank" : undefined}
                            rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-accent transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                              <method.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground">
                                {method.label}
                              </p>
                              <p className="text-sm text-accent font-mono truncate">
                                {method.value}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </a>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>

                    {/* Response Time */}
                    <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
                      <p className="font-mono text-sm text-muted-foreground">
                        Typical response: <span className="text-foreground">within 24 hours</span>
                      </p>
                      <p className="font-mono text-sm text-muted-foreground mt-1">
                        Fastest: <span className="text-foreground">WhatsApp</span>
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Contact;