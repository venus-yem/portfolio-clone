import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight } from './Icons';

interface HeaderProps {
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY >= 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isHome) {
    return (
      <header
        id="sticky-header"
        className={`header position-absolute left-0 top-0 w-100 z-3${isSticky ? ' is-sticky' : ''}`}
      >
        <div className="d-flex justify-content-between header-inner">
          <div className="header-border-bottom d-flex align-items-center justify-content-between flex-grow-1">
            <Link to="/">
              <img src="/assets/wp-content/uploads/2024/07/logo-dark.png" alt="Perez" />
            </Link>
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
              >
                <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
              <Link
                to="/contact"
                className="d-flex align-items-center flex-wrap fw-bold text-dark lh-1 contact-link hover-text-white"
              >
                Let&apos;s Talk
                <span className="animate-arrow-up">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
          <button
            id="offcanvas-toggle"
            type="button"
            onClick={onOpenMenu}
            className="bg-dark border-0 offcanvas-toggle"
            aria-label="Open navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="2" fill="white" />
              <rect x="3" y="14" width="18" height="2" fill="white" />
            </svg>
          </button>
        </div>
      </header>
    );
  }

  // Inner pages header (Dark vs Light)
  return (
    <header
      id="sticky-header"
      className={`${isDark ? 'header bg-dark mt-0' : 'white-header bg-white'}${isSticky ? ' is-sticky' : ''}`}
    >
      <div className="d-flex white-bg-header">
        <div className="flex-1 d-flex align-items-center justify-content-between">
          <Link to="/">
            <img
              src={
                isDark
                  ? '/assets/wp-content/uploads/2024/07/logo.png'
                  : '/assets/wp-content/uploads/2024/07/logo-dark.png'
              }
              alt="Perez"
            />
          </Link>
          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className={`theme-toggle-btn${isDark ? ' theme-toggle-btn--dark-bar' : ''}`}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            >
              <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>
            <Link
              to="/contact"
              className={`d-flex align-items-center flex-wrap py-6px px-3 text-15 fw-bold leading-none mr-2 transition-all ${
                isDark ? 'contact-link-warning' : 'text-active contact-link-light'
              }`}
            >
              Let&apos;s Talk
              <span className="d-inline-block ml-3 animate-arrow-up">
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
        <button
          id="offcanvas-toggle"
          type="button"
          onClick={onOpenMenu}
          className="bg-dark border-0 offcanvas-toggle"
          aria-label="Open navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="18" height="2" fill="white" />
            <rect x="3" y="14" width="18" height="2" fill="white" />
          </svg>
        </button>
      </div>
    </header>
  );
};
