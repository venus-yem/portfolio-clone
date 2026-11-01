import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { OffcanvasMenu } from './OffcanvasMenu';
import { Footer } from './Footer';
import { useAos } from '../hooks/useAos';

export const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useAos();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch {
      // Ignore scroll errors in restricted containers
    }
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden">
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <OffcanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
