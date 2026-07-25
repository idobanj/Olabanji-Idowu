import React from 'react';
import { Layers, Server, Database, BrainCircuit, Cloud, GitBranch } from 'lucide-react';

export function Technologies() {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: <Layers className="h-5 w-5 text-blue-500" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Router']
    },
    {
      title: 'Backend Services',
      icon: <Server className="h-5 w-5 text-emerald-500" />,
      skills: ['Node.js', 'REST APIs', 'API Integrations']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="h-5 w-5 text-indigo-500" />,
      skills: ['Supabase', 'PostgreSQL', 'Web Storage API']
    },
    {
      title: 'AI Integration',
      icon: <BrainCircuit className="h-5 w-5 text-purple-500" />,
      skills: ['Gemini API', 'Prompt Engineering', 'AI Text Generation']
    },
    {
      title: 'Deployment & Hosting',
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      skills: ['Vercel', 'Netlify', 'GitHub Pages']
    },
    {
      title: 'Tooling & Version Control',
      icon: <GitBranch className="h-5 w-5 text-amber-500" />,
      skills: ['Git', 'GitHub', 'npm', 'Vite']
    }
  ];

  return (
    <section className="py-20 border-t border-border bg-card/30 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">
            Core Technologies
          </h2>
          <p className="text-center text-muted-foreground text-sm">
            Technologies, libraries, and integrations I work with to build responsive web applications.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl border border-border bg-card space-y-4 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-muted">
                  {cat.icon}
                </div>
                <h3 className="font-display text-base font-bold text-foreground">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-muted text-foreground border border-border/50 hover:border-accent/40 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
