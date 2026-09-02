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
    "description": "Professional Resume of Olabanji Peter Idowu — Full-Stack Developer",
    "mainEntity": {
      "@type": "Person",
      "name": "Olabanji Peter Idowu",
      "jobTitle": "Full-Stack Developer",
      "email": "idowuolabanji181@gmail.com",
      "telephone": "+2349078062952"
    }
  };

  return (
    <>
      <SEO 
        title="Resume - Olabanji Peter Idowu"
        description="Professional resume of Olabanji Peter Idowu, Full-Stack Developer."
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
              Full-Stack Developer | React, Node.js & Supabase
            </p>
            
            {/* Contact Details Grid */}
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:idowuolabanji181@gmail.com" className="hover:underline">idowuolabanji181@gmail.com</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+2348149016621" className="hover:underline">+234 814 9016 621</a>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Minna, Niger State, Nigeria</span>
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <a href="https://olabanjiidowu.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">olabanjiidowu.vercel.app</a>
              </span>
              <span className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <a href="https://github.com/idobanj" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/idobanj</a>
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                <a href="https://linkedin.com/in/olabanjiidowu" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/olabanjiidowu</a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Professional Summary
            </h2>
            <p className="text-muted-foreground print:text-slate-700 text-sm leading-relaxed">
              Full-Stack Developer with hands-on experience architecting responsive, AI-powered web applications and secure backend systems using React, TypeScript, Node.js, Supabase, PostgreSQL, and modern cloud technologies. Experienced in developing serverless Edge Functions, REST APIs, role-based authentication, database migrations with Row Level Security (RLS), Gemini AI workflows, and Paystack payment systems. Focused on creating scalable, performant, and maintainable software with clean architectural patterns.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground print:text-slate-700">
              <p><strong>Languages:</strong> TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3</p>
              <p><strong>Frontend:</strong> React, React Router, Tailwind CSS, TanStack Query, Zustand</p>
              <p><strong>Backend:</strong> Node.js, Express.js, Deno Edge Functions</p>
              <p><strong>Database:</strong> PostgreSQL, Supabase (RLS, Migrations, Triggers)</p>
              <p><strong>AI & APIs:</strong> Gemini API, REST APIs, Paystack Payment Gateway & Webhooks</p>
              <p><strong>Tools:</strong> Git, GitHub, Vercel, Vite, npm, Postman</p>
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
                <span className="text-xs text-muted-foreground print:text-slate-500">Full-Stack AI Writing Assistant</span>
              </div>
              <p className="text-muted-foreground print:text-slate-700 text-xs sm:text-sm leading-relaxed">
                Designed and built an end-to-end AI-powered writing platform using React 19, Supabase, PostgreSQL, Deno Edge Functions, and Gemini API. Engineered 12 database schema migrations, automated server-side quiz generation, mistake analytics, gamified skill mastery tracking, and role-based authentication.
              </p>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://sabiwrite-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Demo <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
                <a href="https://github.com/idobanj/SabiWrite-AI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Code <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
              </div>
            </div>

            {/* ChurchDue */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-foreground print:text-black">ChurchDue</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">Full-Stack Financial & Dues Management Platform</span>
              </div>
              <p className="text-muted-foreground print:text-slate-700 text-xs sm:text-sm leading-relaxed">
                Built a full-stack organization contribution ledger and dues tracking platform using React 18, TanStack Query, Zustand, and Supabase PostgreSQL with Row Level Security (RLS). Developed serverless edge functions for Paystack checkout initialization, server-side transaction verification, and real-time webhook event processing.
              </p>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://churchdue.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Demo <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
                <a href="https://github.com/idobanj/ChurchDue-project" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Code <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
              </div>
            </div>

            {/* Two Column Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-foreground print:text-black">Perspective Lifestyle</h4>
                <p className="text-muted-foreground print:text-slate-700 text-xs leading-relaxed">
                  Responsive frontend lookbook project demonstrating CSS Grid layout schemas and hover transition sets.
                </p>
                <a href="https://perspective-lifestyle.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent print:text-slate-800 hover:underline">
                  View Live
                </a>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-foreground print:text-black">Acme Rocket</h4>
                <p className="text-muted-foreground print:text-slate-700 text-xs leading-relaxed">
                  Tailwind CSS product landing template designed with dynamic specs comparison grids and accessibility standards.
                </p>
                <a href="https://acme-rocket-website-rose.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-accent print:text-slate-800 hover:underline">
                  View Live
                </a>
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
                <h3 className="font-display font-bold text-sm text-foreground print:text-black">Independent Full-Stack Developer</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">2024 – Present</span>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground print:text-slate-700 text-xs sm:text-sm space-y-1">
                <li>Architected, built, and deployed full-stack web applications combining modular React frontends with Supabase and PostgreSQL backends.</li>
                <li>Engineered serverless Edge Functions for third-party integrations, including Gemini AI prompt workflows and Paystack payment processing with secure webhook verification.</li>
                <li>Designed relational database schemas, SQL migrations, and Row Level Security (RLS) policies ensuring strict multi-tenant data isolation.</li>
                <li>Applied responsive layout rules, clean API error boundaries, and accessibility standards for WCAG AA compliance.</li>
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
                <p className="text-muted-foreground print:text-slate-700 text-xs mt-0.5">Bachelor of Engineering</p>
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
