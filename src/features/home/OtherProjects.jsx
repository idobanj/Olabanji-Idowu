import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from '../../components/ui/BrandIcons';
import { projects } from '../../data/projects';

export function OtherProjects() {
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center reveal">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Other Projects
          </h2>
          <p className="text-muted-foreground text-sm">
            Explorations, templates, and layouts highlighting modern frontend architecture and clean styles.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <div 
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/20 transition-all group duration-300 reveal"
              style={{ transitionDelay: `${(i % 2) * 150}ms` }}
            >
              <div className="space-y-4">
                {/* Header title */}
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Subtle link icon */}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-semibold rounded-md border border-border bg-card text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action bar */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-border/50 mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-black text-white hover:bg-neutral-950 dark:bg-white dark:text-black dark:hover:bg-slate-100 border border-transparent shadow-xs transition-all duration-150 active:scale-95 text-xs font-bold cursor-pointer flex-1"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-white dark:text-black" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted/50 hover:border-accent/25 shadow-xs transition-all duration-150 active:scale-95 text-xs cursor-pointer flex-1"
                >
                  <Github className="h-3.5 w-3.5 text-muted-foreground" />
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
