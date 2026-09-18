import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', id: 'home-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Skills', id: 'skills-section' },
    { name: 'Projects', id: 'project-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur-md pt-16 pb-12 transition-colors duration-200 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top: Large Aesthetic Watermark Brand Display like Prince's Footer */}
        <div className="text-center select-none opacity-20 dark:opacity-15 pointer-events-none">
          <span className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest bg-linear-to-r from-accent via-purple-500 to-sky-400 bg-clip-text text-transparent uppercase">
            OLABANJI
          </span>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 py-2 border-y border-border/50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-4 py-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Bottom Bar: Copyright, Social Icons, Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            <span>© {currentYear} </span>
            <span className="font-semibold text-foreground">Olabanji Peter Idowu</span>
            <span>. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/idobanj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background/50 hover:bg-muted hover:text-accent transition-all duration-200 text-muted-foreground"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/olabanjiidowu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background/50 hover:bg-muted hover:text-accent transition-all duration-200 text-muted-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:idowuolabanji181@gmail.com"
              className="p-2 rounded-full border border-border bg-background/50 hover:bg-muted hover:text-accent transition-all duration-200 text-muted-foreground"
              aria-label="Email Olabanji"
            >
              <Mail className="h-4 w-4" />
            </a>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-full border border-border bg-background/50 hover:bg-accent hover:text-white transition-all duration-200 text-muted-foreground cursor-pointer"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
