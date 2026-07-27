import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { InstallPrompt } from '../ui/InstallPrompt';

export function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
