import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Printer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/BrandIcons';
import { SEO } from '../components/common/SEO';

export default function Resume() {
  // Auto scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Olabanji Peter Idowu Resume",
    "description": "Professional Resume of Olabanji Peter Idowu — Full-Stack Software Engineer",
    "mainEntity": {
      "@type": "Person",
      "name": "Olabanji Peter Idowu",
      "jobTitle": "Full-Stack Software Engineer",
      "email": "idowuolabanji181@gmail.com",
      "telephone": "+2349078062952"
    }
  };

  return (
    <>
      <SEO 
        title="Resume - Olabanji Peter Idowu"
        description="Professional resume of Olabanji Peter Idowu, Full-Stack Software Engineer based in Minna, Nigeria (UTC+1), open to worldwide remote roles."
        ogUrl="https://olabanjiidowu.vercel.app/resume"
        structuredData={resumeSchema}
      />
      
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 print:p-0 print:bg-white print:text-black transition-colors duration-200">
        
        {/* Navigation / Action bar (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 print:hidden">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/olabanji_resume.pdf"
              download="olabanji_resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-95 text-xs shadow-sm transition-all duration-150"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href="/olabanji_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-foreground font-semibold hover:bg-muted active:scale-95 text-xs shadow-sm cursor-pointer transition-all duration-150"
            >
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </a>
          </div>
        </div>

        {/* Resume Sheet */}
        <div className="bg-card print:bg-white border border-border print:border-none p-8 sm:p-12 print:p-0 rounded-3xl print:shadow-none shadow-sm space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-4 border-b border-border pb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground print:text-black">
              Olabanji Peter Idowu
            </h1>
            <p className="text-accent print:text-slate-800 font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Full-Stack Software Engineer | React • TypeScript • Node.js • PostgreSQL
            </p>
            <p className="text-sm font-medium text-muted-foreground print:text-slate-700">
              Open to worldwide remote roles
            </p>
            
            {/* Contact Details Grid */}
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-muted-foreground print:text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:idowuolabanji181@gmail.com" className="hover:underline break-all">idowuolabanji181@gmail.com</a>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <a href="tel:+2349078062952" className="hover:underline">+234 907 806 2952</a>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Minna, Nigeria (UTC+1)</span>
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
              Full-stack developer experienced in building and deploying web applications using React, TypeScript, Node.js, Supabase, and PostgreSQL. Owns implementation across responsive frontend experiences, relational data modeling, serverless backend functions, authentication, third-party APIs, and cloud deployment. Strongest work includes multi-tenant access controls, payment processing, and AI-powered application workflows.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground print:text-slate-700">
              <p><strong>Languages:</strong> JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3</p>
              <p><strong>Frontend:</strong> React, React Router, Tailwind CSS, TanStack Query, Zustand, responsive UI</p>
              <p><strong>Backend & APIs:</strong> Node.js, Express.js, REST APIs, Supabase Edge Functions (Deno), webhooks</p>
              <p><strong>Data & Security:</strong> PostgreSQL, Supabase, authentication, authorization, Row Level Security (RLS), database migrations, multi-tenancy</p>
              <p className="sm:col-span-2"><strong>Integrations & Tools:</strong> Paystack, Gemini API, Git, GitHub, Vercel, Vite, Postman</p>
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
                <li>Built and deployed full-stack web applications, owning frontend implementation, backend integrations, PostgreSQL data design, and cloud deployment.</li>
                <li>Designed relational schemas and SQL migrations; implemented authentication, role-based access, and Row Level Security (RLS) policies for tenant-level data isolation.</li>
                <li>Developed Supabase Edge Functions for AI integrations, Paystack checkout initialization, server-side transaction verification, and payment webhooks.</li>
                <li>Built responsive React interfaces, managed application state, and troubleshot connected user-to-admin payment and balance workflows.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Selected Projects
            </h2>
            
            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-foreground print:text-black">ChurchDue</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">Multi-Tenant Dues & Payment Management Platform</span>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground print:text-slate-700 text-xs sm:text-sm space-y-1">
                <li>Built a multi-organization platform for member/student dues, contributions, payment records, and outstanding-balance tracking using React, TanStack Query, Zustand, and Supabase.</li>
                <li>Implemented tenant-scoped PostgreSQL schemas and RLS policies to restrict organization data access; developed authentication and role-based admin/member workflows.</li>
                <li>Integrated Paystack with serverless checkout initialization, server-side payment verification, and webhook processing to synchronize payment records and balances.</li>
              </ul>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://churchdue.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  churchdue.vercel.app <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h3 className="font-display font-bold text-base text-foreground print:text-black">SabiWrite AI</h3>
                <span className="text-xs text-muted-foreground print:text-slate-500">AI Writing Coach</span>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground print:text-slate-700 text-xs sm:text-sm space-y-1">
                <li>Built an AI-assisted writing platform with React, Supabase, PostgreSQL, authentication, writing analytics, quizzes, and progress tracking.</li>
                <li>Authored 12 database schema migrations and built Deno Edge Functions for server-side quiz generation, mistake analysis, and skill-mastery workflows.</li>
                <li>Integrated external LLM APIs for writing assistance and implemented role-based authentication.</li>
              </ul>
              <div className="flex gap-4 text-xs font-medium text-accent print:text-slate-800">
                <a href="https://sabiwrite-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  sabiwrite-ai.vercel.app <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
                <a href="https://github.com/idobanj/SabiWrite-AI" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Code <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-accent print:text-slate-800 border-b border-border/60 pb-1">
              Education
            </h2>
            <div className="text-xs sm:text-sm">
              <h3 className="font-bold text-foreground print:text-black">Federal University of Technology, Minna</h3>
              <p className="text-muted-foreground print:text-slate-700 text-xs mt-0.5">Nigeria</p>
              <p className="text-muted-foreground print:text-slate-700 text-xs mt-0.5">Bachelor of Engineering (in progress)</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
