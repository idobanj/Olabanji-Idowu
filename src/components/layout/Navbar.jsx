import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    
    // If not on home page, navigate home first, then scroll
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scrolling after redirecting to home page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear history state to prevent repeating on reload
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity"
              onClick={() => handleNavClick('home-section')}
            >
              <img 
                src="/img/20241226_195729.png" 
                alt="Olabanji Idowu Logo" 
                className="h-9 w-9 rounded-lg object-contain bg-slate-900 p-0.5" 
              />
              <span className="font-display font-bold text-lg tracking-tight">
                OLABANJI PETER
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('home-section')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about-section')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('project-section')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('contact-section')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
            <div className="h-4 w-px bg-border"></div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none transition-colors cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-border bg-card ${
          isOpen ? 'max-h-72 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`} 
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          <button
            onClick={() => handleNavClick('home-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('project-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact-section')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
