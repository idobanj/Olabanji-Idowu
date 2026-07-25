import React from 'react';
import { Eye, Gauge, Compass, Smartphone } from 'lucide-react';

export function Philosophy() {
  const points = [
    {
      title: 'Performance-First',
      icon: <Gauge className="h-5 w-5 text-accent" />,
      description: 'Optimizing image sizes, asset caching, lazy loading, and route code-splitting to guarantee page loads that feel instantaneous on any connection.'
    },
    {
      title: 'Accessibility & Semantics',
      icon: <Eye className="h-5 w-5 text-accent" />,
      description: 'Adhering to WCAG AA guidelines. Structuring layout tags, keyboard focuses, and color-contrast ratios to ensure full usability for screen-reader tools.'
    },
    {
      title: 'Responsive Adaptability',
      icon: <Smartphone className="h-5 w-5 text-accent" />,
      description: 'Designing user interfaces that feel custom-tailored for mobile, tablet, and desktop monitors, rather than merely stretching layouts to fit.'
    },
    {
      title: 'Architectural Cleanliness',
      icon: <Compass className="h-5 w-5 text-accent" />,
      description: 'Separating page routes, UI modules, static data lists, and custom React hooks. This prevents duplication and makes code bases easily reviewable.'
    }
  ];

  return (
    <section id="about-section" className="py-24 border-t border-border bg-card/10 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-16">
          <div className="space-y-3 md:w-1/2">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Development Philosophy
            </h2>
            <p className="text-muted-foreground text-base">
              My engineering approach prioritizes standard optimization practices, clean code structures, and user interfaces that feel intuitive.
            </p>
          </div>
          
          <div className="md:w-1/2 text-muted-foreground leading-relaxed text-sm bg-card p-6 rounded-2xl border border-border shadow-sm">
            "A portfolio should prove technical capability through execution. I focus on building accessible, lightweight React applications that solve user problems cleanly, ensuring layouts adapt properly and pages load without lag."
          </div>
        </div>

        {/* Philosophy Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-accent/10 border border-accent/20">
                {pt.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-foreground">
                  {pt.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
