import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileText, Send, Check } from 'lucide-react';
import { Github, Linkedin } from '../../components/ui/BrandIcons';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate submission success
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact-section" className="py-24 border-t border-border bg-card/20 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you are a recruiter, hiring manager, startup founder, or looking for consulting, I'd love to connect. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact links list */}
            <div className="space-y-4 pt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=idowuolabanji181@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors duration-150"
              >
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground">Email</h3>
                  <p className="text-sm font-medium text-foreground">idowuolabanji181@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/olabanjiidowu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors duration-150"
              >
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground">LinkedIn</h3>
                  <p className="text-sm font-medium text-foreground">linkedin.com/in/olabanjiidowu</p>
                </div>
              </a>

              <Link
                to="/resume"
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors duration-150"
              >
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground">Resume</h3>
                  <p className="text-sm font-medium text-foreground">View & print professional resume</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-3 p-8 rounded-2xl border border-border bg-card shadow-sm">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formState.name}
                  onChange={handleTextChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formState.email}
                  onChange={handleTextChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formState.message}
                  onChange={handleTextChange}
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none transition-colors duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                  isSubmitted 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98]'
                } text-sm`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
