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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {otherProjects.map(project => (
            <div 
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow group duration-200"
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
                    <ArrowUpRight className="h-5 w-5" />
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
              <div className="flex items-center gap-4 pt-6 border-t border-border/50 mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
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
