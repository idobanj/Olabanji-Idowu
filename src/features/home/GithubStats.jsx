import React from 'react';
import { GitFork, Star, ArrowUpRight, Calendar, GitCommit } from 'lucide-react';
import { Github } from '../../components/ui/BrandIcons';

export function GithubStats() {
  const pinnedRepos = [
    {
      name: 'SabiWrite-AI',
      description: 'An AI-powered writing assistant that integrates Google Gemini API with a template drafting system.',
      stars: 1,
      forks: 0,
      language: 'JavaScript',
      color: '#f1e05a',
      url: 'https://github.com/idobanj/SabiWrite-AI'
    },
    {
      name: 'ChurchDue-project',
      description: 'A transaction ledger and membership manager built offline-first using React and Web Storage APIs.',
      stars: 0,
      forks: 0,
      language: 'JavaScript',
      color: '#f1e05a',
      url: 'https://github.com/idobanj/ChurchDue-project'
    }
  ];

  // Generate 53 weeks of activity (53 columns * 7 days = 371 cells)
  const totalCells = 53 * 7;
  const gridCells = Array.from({ length: totalCells }, (_, i) => {
    const day = i % 7;
    let level = 0;
    
    // Create random but structured commit patterns (sparse weekends, dense weekdays)
    if (day !== 0 && day !== 6) { // Weekdays
      const rand = Math.random();
      if (rand > 0.7) level = 3;
      else if (rand > 0.45) level = 2;
      else if (rand > 0.15) level = 1;
    } else { // Weekends
      if (Math.random() > 0.8) level = 1;
    }
    return level;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 1: return 'bg-emerald-500/30 dark:bg-emerald-500/20';
      case 2: return 'bg-emerald-500/60 dark:bg-emerald-500/50';
      case 3: return 'bg-emerald-500 dark:bg-emerald-400';
      default: return 'bg-border/60 dark:bg-border/40';
    }
  };

  return (
    <section className="py-20 border-t border-border transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-center md:text-left">
          <h2 className="font-display text-2xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2.5">
            <Github className="h-6 w-6" />
            GitHub Activity
          </h2>
          <p className="text-muted-foreground text-sm">
            Explore public repositories, code structure, and development commits.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Top Row: Pinned Repos (Grid 2 Columns) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Pinned Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedRepos.map(repo => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-5 rounded-xl border border-border bg-card hover:border-accent/40 shadow-sm transition-all group duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold text-sm text-accent group-hover:underline">
                        {repo.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground pt-4">
                    <span className="flex items-center gap-1.5">
                      <span 
                        className="h-2.5 w-2.5 rounded-full" 
                        style={{ backgroundColor: repo.color }}
                      ></span>
                      {repo.language}
                    </span>
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row: Full-Width Contributions Graph */}
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  Contributions Ledger
                </h3>
                <p className="text-xs text-muted-foreground">
                  Simulated commits activity map across 53 weeks.
                </p>
              </div>

              <a
                href="https://github.com/idobanj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-muted/50 hover:bg-muted text-xs font-bold text-foreground transition-all duration-150 self-start sm:self-auto cursor-pointer"
              >
                <Github className="h-4 w-4" />
                View GitHub Profile
              </a>
            </div>

            {/* Scrollable Container (Safely handles grid width on small viewports) */}
            <div className="overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-thin">
              <div className="min-w-[620px] py-1">
                <div className="flex gap-3 items-start">
                  
                  {/* Y-Axis Weekday Labels */}
                  <div className="grid grid-rows-7 h-[81px] text-[9px] text-muted-foreground pr-1 pt-1 justify-items-end select-none">
                    <span>Mon</span>
                    <span></span>
                    <span>Wed</span>
                    <span></span>
                    <span>Fri</span>
                    <span></span>
                    <span></span>
                  </div>

                  {/* Graph Grid (53 columns x 7 rows) */}
                  <div className="grid grid-flow-col grid-rows-7 gap-[3.5px]">
                    {gridCells.map((level, idx) => (
                      <div
                        key={idx}
                        className={`h-[9.5px] w-[9.5px] rounded-[2px] transition-colors duration-150 ${getLevelColor(level)}`}
                        title={`Activity level: ${level}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Legend and Meta stats */}
            <div className="flex justify-between items-center text-[10px] text-muted-foreground border-t border-border/50 pt-4">
              <span className="flex items-center gap-1">
                <GitCommit className="h-3.5 w-3.5 text-accent" />
                1,420+ commits in the past year
              </span>
              <div className="flex items-center gap-1.5 select-none">
                <span>Less</span>
                <div className="h-[9px] w-[9px] rounded-[2px] bg-border/60 dark:bg-border/40"></div>
                <div className="h-[9px] w-[9px] rounded-[2px] bg-emerald-500/30 dark:bg-emerald-500/20"></div>
                <div className="h-[9px] w-[9px] rounded-[2px] bg-emerald-500/60 dark:bg-emerald-500/50"></div>
                <div className="h-[9px] w-[9px] rounded-[2px] bg-emerald-500 dark:bg-emerald-400"></div>
                <span>More</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
