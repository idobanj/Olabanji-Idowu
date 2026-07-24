import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/BrandIcons';
import { SEO } from '../components/common/SEO';

export default function Resume() {
  // Auto scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Olabanji Peter Idowu Resume",
    "description": "Professional Resume of Olabanji Peter Idowu — Frontend Developer",
    "mainEntity": {
      "@type": "Person",
      "name": "Olabanji Peter Idowu",
      "jobTitle": "Frontend Developer",
      "email": "idowuolabanji181@gmail.com",
      "telephone": "+2349078062952"
    }
  };

  return (
    <>
      <SEO 
        title="Resume - Olabanji Peter Idowu"
        description="Professional resume of Olabanji Peter Idowu, Frontend Developer."
        ogUrl="https://olabanjiidowu.vercel.app/resume"
        structuredData={resumeSchema}
      />
      
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 print:p-0 print:bg-white print:text-black transition-colors duration-200">
        
        {/* Navigation / Action bar (Hidden when printing) */}
        <div className="flex items-center justify-between gap-4 mb-10 print:hidden">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 text-xs shadow-sm cursor-pointer transition-all duration-150"
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="bg-card print:bg-white border border-border print:border-none p-8 sm:p-12 print:p-0 rounded-3xl print:shadow-none shadow-sm space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-4 border-b border-border pb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground print:text-black">
              Olabanji Peter Idowu
            </h1>
            <p className="text-accent print:text-slate-800 font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Frontend Developer | React & JavaScript Developer
            </p>
            
            {/* Contact Details Grid */}
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground print:text-slate-700">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Nigeria
              </span>
              <a href="mailto:idowuolabanji181@gmail.com" className="flex items-center gap-1 hover:text-foreground">
                <Mail className="h-3.5 w-3.5" />
                idowuolabanji181@gmail.com
              </a>
              <a href="tel:+2349078062952" className="flex items-center gap-1 hover:text-foreground">
                <Phone className="h-3.5 w-3.5" />
                09078062952
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground print:text-slate-700 pt-1">
              <a href="https://olabanjiidowu.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
                <Globe className="h-3.5 w-3.5" />
                olabanjiidowu.vercel.app
              </a>
              <a href="https://github.com/idobanj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
                <Github className="h-3.5 w-3.5" />
                github.com/idobanj
              </a>
              <a href="https://linkedin.com/in/olabanjiidowu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
                <Linkedin className="h-3.5 w-3.5" />
                linkedin.com/in/olabanjiidowu
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Professional Summary
            </h2>
            <p className="text-muted-foreground print:text-slate-700 text-sm leading-relaxed">
              Frontend Developer with hands-on experience building responsive, AI-powered web applications using React, JavaScript, Supabase, and modern frontend technologies. Experienced integrating authentication, REST APIs, AI capabilities with Gemini API, and payment workflows. Focused on creating accessible, performant, and maintainable applications with clean architecture and user-centered design.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground print:text-slate-700">
              <p><strong>Languages:</strong> JavaScript (ES6+), HTML5, CSS3</p>
              <p><strong>Frontend:</strong> React, React Router, Tailwind CSS, Bootstrap</p>
              <p><strong>Backend:</strong> Node.js, Express.js</p>
              <p><strong>Database:</strong> Supabase, PostgreSQL</p>
              <p><strong>AI & APIs:</strong> Gemini API, REST APIs, Paystack</p>
              <p><strong>Tools:</strong> Git, GitHub, Vercel, npm</p>
            </div>
          </div>

          {/* Selected Work */}
          <div className="space-y-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Selected Work
            </h2>
            
            {/* SabiWrite AI */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-foreground print:text-black">SabiWrite AI</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">AI Writing Assistant</span>
              </div>
              <p className="text-muted-foreground print:text-slate-700 text-xs sm:text-sm leading-relaxed">
                Designed and developed an AI-powered writing coach using React, Supabase, and Gemini API. Built the core writing assistance workflow, personalized feedback experience, authentication, and responsive UI while handling asynchronous state management and routing efficiently.
              </p>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://sabiwrite-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Demo <ArrowLeft className="h-3 w-3 rotate-180" /></a>
                <a href="https://github.com/idobanj/SabiWrite-AI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Code <ArrowLeft className="h-3 w-3 rotate-180" /></a>
              </div>
            </div>

            {/* ChurchDue */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-foreground print:text-black">ChurchDue</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">Contribution Tracking App</span>
              </div>
              <p className="text-muted-foreground print:text-slate-700 text-xs sm:text-sm leading-relaxed">
                Built a contribution ledger and dues tracking platform featuring structured records, local data persistence, member directories, and responsive tables that adapt to mobile layouts. Integrated payment checkout simulation using Paystack APIs.
              </p>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://churchdue.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Demo <ArrowLeft className="h-3 w-3 rotate-180" /></a>
                <a href="https://github.com/idobanj/ChurchDue-project" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Code <ArrowLeft className="h-3 w-3 rotate-180" /></a>
              </div>
            </div>

            {/* Perspective Lifestyle & Acme Rocket Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-foreground print:text-black">Perspective Lifestyle</h4>
                <p className="text-muted-foreground print:text-slate-700 text-xs leading-relaxed">
                  Responsive frontend lookbook project demonstrating CSS Grid layout schemas and hover transition sets.
                </p>
                <a href="https://perspective-lifestyle.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent print:text-slate-800 hover:underline">View Live</a>
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-foreground print:text-black">Acme Rocket</h4>
                <p className="text-muted-foreground print:text-slate-700 text-xs leading-relaxed">
                  Tailwind CSS product landing template designed with dynamic specs comparison grids and accessibility standards.
                </p>
                <a href="https://acme-rocket-website-rose.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent print:text-slate-800 hover:underline">View Live</a>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-sm text-foreground print:text-black">Independent Frontend Developer</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">2024 – Present</span>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground print:text-slate-700 text-xs sm:text-sm space-y-1">
                <li>Architected, optimized, and deployed responsive React applications using Vite and Tailwind CSS.</li>
                <li>Integrated secure third-party integrations (Supabase DB, Gemini AI endpoints, Paystack Payment API).</li>
                <li>Applied mobile-first layout rules, semantic structures, and accessibility standards for WCAG AA compliance.</li>
              </ul>
            </div>
          </div>

          {/* Education & Recognition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
                Education
              </h2>
              <div className="text-xs sm:text-sm">
                <h3 className="font-bold text-foreground print:text-black">Federal University of Technology, Minna</h3>
                <p className="text-muted-foreground print:text-slate-700 text-xs mt-0.5">B.Eng. Chemical Engineering (Expected 2027)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
                Recognition
              </h2>
              <div className="text-xs sm:text-sm">
                <h3 className="font-bold text-foreground print:text-black">PTDF Scholarship Beneficiary</h3>
                <p className="text-muted-foreground print:text-slate-700 text-xs mt-0.5">Academic sponsorship recipient (Since 2023)</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
