import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
