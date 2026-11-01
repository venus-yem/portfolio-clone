import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  theme: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'perez-theme-mode';

function safeGetStoredTheme(): ThemeMode | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Cross-origin or sandboxed iframes block localStorage access
  }
  return null;
}

function safeSetStoredTheme(mode: ThemeMode): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    // Ignore storage errors in restricted iframes
  }
}

function resolveInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';
  try {
    const params = new URLSearchParams(window.location.search);
    const queryTheme = params.get('theme');
    if (queryTheme === 'light' || queryTheme === 'dark') {
      return queryTheme;
    }
    if (window.location.pathname.startsWith('/light')) {
      return 'light';
    }
    if (window.location.pathname.startsWith('/dark')) {
      return 'dark';
    }
  } catch {
    // Ignore URL access errors in restricted environments
  }
  return safeGetStoredTheme() ?? 'dark';
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(resolveInitialTheme);
  const location = useLocation();

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    safeSetStoredTheme(mode);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Sync URL ?theme= query param if navigated with one
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('theme');
    if (q === 'dark' || q === 'light') {
      setTheme(q);
    }
  }, [location.search]);

  // Keep <body> classes aligned with Perez's original home.css & style.css selectors
  useEffect(() => {
    const isHome =
      location.pathname === '/' ||
      location.pathname === '/dark' ||
      location.pathname === '/light';
    const classes = ['wp-theme-perez'];
    if (theme === 'dark') {
      if (isHome) {
        classes.push('home', 'dark-bg', 'bg-dark-tab');
      } else {
        classes.push('bg-dark');
      }
    } else if (isHome) {
      classes.push('home');
    }
    document.body.className = classes.join(' ');
  }, [theme, location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
