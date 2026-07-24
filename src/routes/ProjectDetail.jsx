import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Cpu, AlertCircle, Bookmark, Compass } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';
import { SEO } from '../components/common/SEO';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  // Auto scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-32 text-center space-y-6">
        <AlertCircle className="h-16 w-16 mx-auto text-rose-500" />
        <h1 className="font-display text-3xl font-extrabold">Project Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          The project ID you are looking for does not exist or has been refactored.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const isCaseStudy = !!project.caseStudy;

  // Schema for SEO structured data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.shortDescription,
    "applicationCategory": project.id === 'sabiwrite-ai' ? "AIWritingAssistant" : "FinancialApplication",
    "operatingSystem": "All",
    "url": project.liveUrl,
    "codeRepository": project.githubUrl,
    "author": {
      "@type": "Person",
      "name": "Olabanji Peter Idowu"
    }
  };

  return (
    <>
      <SEO 
        title={`${project.title} Case Study`}
        description={project.shortDescription}
        ogImage={project.image}
        ogUrl={`https://olabanjiidowu.vercel.app/projects/${project.id}`}
        structuredData={projectSchema}
      />
      
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 transition-colors duration-200">
        
        {/* Back Link */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="space-y-6 mb-12">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-[1.15]">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Badges / Tech */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-lg border border-border bg-card text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-150 active:scale-95 text-xs shadow-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Live Deployment
            </a>
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted transition-all duration-150 active:scale-95 text-xs"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Large Screenshot */}
        <div className="border border-border bg-card p-2 rounded-2xl mb-16 overflow-hidden shadow-sm">
          <img 
            src={project.image} 
            alt={`${project.title} Showcase`} 
            className="w-full aspect-video object-cover rounded-xl filter saturate-[0.85] hover:saturate-100 transition-all duration-300"
          />
        </div>

        {/* Main Body */}
        {isCaseStudy ? (
          <div className="space-y-16">
            
            {/* 1. Overview & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-border pb-12">
              <div className="md:col-span-2">
                <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-accent" />
                  Overview
                </h2>
              </div>
              <div className="md:col-span-3 text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>{project.caseStudy.overview}</p>
                <div className="bg-muted/40 border-l-2 border-accent p-4 rounded-r-xl">
                  <h3 className="font-bold text-foreground text-xs uppercase mb-1">The Problem</h3>
                  <p className="text-xs">{project.caseStudy.problem}</p>
                </div>
              </div>
            </div>

            {/* 2. Solution & Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-border pb-12">
              <div className="md:col-span-2">
                <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                  <Compass className="h-5 w-5 text-accent" />
                  Architecture
                </h2>
              </div>
              <div className="md:col-span-3 text-muted-foreground text-sm leading-relaxed space-y-4">
                <p><strong>Solution:</strong> {project.caseStudy.solution}</p>
                <p><strong>System Flow:</strong> {project.caseStudy.architecture}</p>
              </div>
            </div>

            {/* 3. Technical Decisions */}
            <div className="space-y-6 border-b border-border pb-12">
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <Cpu className="h-5 w-5 text-accent" />
                Technical Decisions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.caseStudy.decisions.map((decision, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-border bg-card shadow-sm space-y-2">
                    <h3 className="font-display font-semibold text-sm text-foreground">
                      {decision.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {decision.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Challenges & Lessons */}
            <div className="space-y-6 border-b border-border pb-12">
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Key Challenges & Resolutions
              </h2>
              <div className="space-y-4">
                {project.caseStudy.challenges.map((challenge, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-border bg-muted/20 space-y-1.5">
                    <h3 className="font-display font-bold text-sm text-foreground">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border mt-4">
                <h3 className="font-bold text-xs uppercase text-muted-foreground mb-2">Lessons Learned</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{project.caseStudy.lessons}"
                </p>
              </div>
            </div>

            {/* 5. Future Improvements */}
            <div className="space-y-4 pb-12">
              <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-wider">
                Future Improvements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {project.caseStudy.improvements.map((imp, idx) => (
                  <li key={idx}>{imp}</li>
                ))}
              </ul>
            </div>

          </div>
        ) : (
          /* Visual Layout for smaller projects without full Case Study details */
          <div className="space-y-8 bg-card border border-border p-8 rounded-2xl text-center">
            <h2 className="font-display text-xl font-bold">Project Details</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
              This project is a static website or layout concept. It showcases frontend capabilities, clean layout spacing, and Tailwind CSS design implementations.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
              <span className="text-border">|</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
