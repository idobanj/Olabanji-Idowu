import { useEffect, useState, useCallback } from 'react';

const DISMISS_KEY = 'pwa-install-dismissed-at';
const DISMISS_TTL_MS = 14 * 24 * 60 * 60 * 1000; // 14 days

function wasRecentlyDismissed() {
  try {
    const raw = localStorage.getItem(DISMISS_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    return Number.isFinite(ts) && Date.now() - ts < DISMISS_TTL_MS;
  } catch {
    return false;
  }
}

export function useInstallPrompt() {
  // null = no event yet, otherwise the deferred BeforeInstallPromptEvent
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => wasRecentlyDismissed());

  useEffect(() => {
    // Already running as an installed app (standalone display mode)
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true; // iOS Safari
    if (isStandalone) setIsInstalled(true);

    const onBeforeInstall = (e) => {
      // Prevent the browser's default mini-banner so we control the UX
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const onAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const promptToInstall = useCallback(async () => {
    if (!deferredPrompt) return { outcome: 'unavailable' };
    try {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      // choice.outcome is 'accepted' or 'dismissed'
      setDeferredPrompt(null);
      if (choice?.outcome === 'accepted') {
        setIsInstalled(true);
      }
      return choice;
    } catch {
      setDeferredPrompt(null);
      return { outcome: 'error' };
    }
  }, [deferredPrompt]);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore quota / privacy errors */
    }
    setIsDismissed(true);
  }, []);

  const canPrompt = Boolean(deferredPrompt) && !isInstalled && !isDismissed;

  return {
    canPrompt,
    isInstalled,
    isDismissed,
    promptToInstall,
    dismiss,
  };
}
