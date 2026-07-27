import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { useInstallPrompt } from '../../hooks/useInstallPrompt';

export function InstallPrompt() {
  const { canPrompt, promptToInstall, dismiss } = useInstallPrompt();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Slight delay before showing so it doesn't pop in instantly on page load.
  useEffect(() => {
    if (!canPrompt) {
      setIsVisible(false);
      return;
    }
    const t = window.setTimeout(() => setIsVisible(true), 3500);
    return () => window.clearTimeout(t);
  }, [canPrompt]);

  const handleInstall = async () => {
    await promptToInstall();
  };

  const handleDismiss = () => {
    setIsLeaving(true);
    // Allow the leave animation to finish before unmounting.
    window.setTimeout(() => {
      dismiss();
      setIsLeaving(false);
    }, 200);
  };

  if (!canPrompt || !isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Install Olabanji Idowu portfolio app"
      className={`fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-50
                  rounded-2xl border border-border bg-card text-card-foreground
                  shadow-lg p-4 transition-all duration-200
                  ${isLeaving
                    ? 'opacity-0 translate-y-2'
                    : 'opacity-100 translate-y-0 motion-safe:animate-[fade-in-up_0.25s_ease-out]'}`}
      style={{
        // Inline animation ensures it works even if the global keyframes are removed
        animationName: 'fade-in-up',
      }}
    >
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="flex items-start gap-3">
        <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Download className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="grow min-w-0">
          <p className="text-sm font-semibold text-foreground">
            Install this portfolio
          </p>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
            Add Olabanji Idowu to your home screen for quick access — works offline.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstall}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary text-primary-foreground
                         px-3 py-1.5 text-xs font-semibold
                         hover:opacity-90 active:scale-95 transition-all duration-150
                         cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Install
            </button>
            <button
              type="button"
              onClick={handleDismiss}
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground
                         hover:bg-muted hover:text-foreground
                         transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Not now
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss install prompt"
          className="shrink-0 rounded-lg p-1 text-muted-foreground
                     hover:bg-muted hover:text-foreground transition-colors
                     cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}