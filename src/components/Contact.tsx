import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Let's discuss how automation can improve your workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="card-professional">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  required
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
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Prefer to reach out directly? Use the options below.
              </p>
            </div>
            
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">contact@example.com</p>
              </div>
            </a>

            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Quick response</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
