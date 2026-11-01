import React, { useEffect } from 'react';
import { BrowserRouter, MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeMode, ThemeProvider, useTheme } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectTagPage } from './pages/ProjectTagPage';
import { ContactPage } from './pages/ContactPage';

function canUseBrowserHistory(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (window.origin === 'null' || window.location.protocol === 'data:' || window.location.protocol === 'blob:') {
      return false;
    }
    window.history.replaceState(window.history.state, '', window.location.href);
    return true;
  } catch {
    return false;
  }
}

const SafeRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [useHistory] = React.useState(canUseBrowserHistory);
  if (!useHistory) {
    return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
};

const ThemeRouteRedirect: React.FC<{ mode: ThemeMode; to?: string }> = ({ mode, to = '/' }) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);
  return <Navigate to={to} replace />;
};

export const App: React.FC = () => {
  return (
    <SafeRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/project-tag/:tag" element={<ProjectTagPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Optional /dark & /light path compatibility aliases */}
            <Route path="/dark" element={<ThemeRouteRedirect mode="dark" />} />
            <Route path="/light" element={<ThemeRouteRedirect mode="light" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </SafeRouter>
  );
};

export default App;
