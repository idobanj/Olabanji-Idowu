import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTheme } from './hooks/useTheme';
import { Layout } from './components/layout/Layout';

// Lazy loading pages for route-based code splitting
const Home = lazy(() => import('./routes/Home'));
const ProjectDetail = lazy(() => import('./routes/ProjectDetail'));
const Resume = lazy(() => import('./routes/Resume'));

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background text-foreground transition-colors duration-200">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent"></div>
    </div>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const scanAndObserve = () => {
      const elements = document.querySelectorAll('.reveal:not(.reveal-active)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial scan on mount
    scanAndObserve();

    // Listen for DOM mutations to scan for lazy-loaded route elements
    const mutationObserver = new MutationObserver(scanAndObserve);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              {/* Fallback redirect to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
