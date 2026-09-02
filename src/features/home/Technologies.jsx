import React from 'react';
import { Layers, Server, Database, BrainCircuit, Cloud, GitBranch } from 'lucide-react';

export function Technologies() {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: <Layers className="h-5 w-5 text-blue-500" />,
      skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'TanStack Query', 'Zustand']
    },
    {
      title: 'Backend & Serverless',
      icon: <Server className="h-5 w-5 text-emerald-500" />,
      skills: ['Node.js', 'Express.js', 'Deno Edge Functions', 'REST APIs', 'Webhooks']
    },
    {
      title: 'Database & Security',
      icon: <Database className="h-5 w-5 text-indigo-500" />,
      skills: ['PostgreSQL', 'Supabase', 'Row Level Security (RLS)', 'SQL Migrations']
    },
    {
      title: 'AI & Payment Integrations',
      icon: <BrainCircuit className="h-5 w-5 text-purple-500" />,
      skills: ['Gemini API', 'Prompt Engineering', 'Paystack API', 'Webhook Verification']
    },
    {
      title: 'Deployment & Cloud',
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      skills: ['Vercel', 'Supabase Cloud', 'Netlify', 'GitHub Pages']
    },
    {
      title: 'Tooling & Architecture',
      icon: <GitBranch className="h-5 w-5 text-amber-500" />,
      skills: ['Git', 'GitHub', 'Vite', 'npm', 'Postman']
    }
  ];

  return (
    <section className="py-20 border-t border-border bg-card/30 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center md:text-left reveal">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">
            Core Technologies
          </h2>
          <p className="text-center text-muted-foreground text-sm">
            Technologies, frameworks, databases, and APIs I work with to build scalable full-stack web applications.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl border border-border bg-card space-y-4 shadow-sm reveal hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/25 transition-all duration-300"
              style={{ transitionDelay: `${(i % 3) * 120}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-muted group-hover:scale-110 transition-transform duration-250">
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
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-muted text-foreground border border-border/50 hover:scale-105 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default"
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
