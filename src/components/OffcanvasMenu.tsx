import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight } from './Icons';

interface OffcanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OffcanvasMenu: React.FC<OffcanvasMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <div
        className={`react-offcanvas-backdrop${isOpen ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="offcanvas"
        className={`offcanvas offcanvas-end bg-dark d-flex flex-wrap flex-column justify-content-between react-offcanvas${
          isOpen ? ' show' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div>
          <div className="d-flex flex-wrap justify-content-between align-items-center offcanvas-header">
            <Link to="/" onClick={onClose}>
              <img src="/assets/wp-content/uploads/2024/07/offcanvas-logo.png" alt="Perez" />
            </Link>
            <button
              id="offcanvas-close"
              type="button"
              onClick={onClose}
              className="offcanvas-close bg-primary border-0"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <nav className="offcanvas-nav d-flex flex-wrap flex-column justify-content-between">
            <ul className="offcanvas-menu p-0 list-unstyled">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li
                    key={item.to}
                    className={`menu-item offcanvas-menu-item${isActive ? ' current-menu-item' : ''}`}
                  >
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="text-white text-xl fw-bold font-Syne leading-none d-flex flex-wrap align-items-center justify-content-between offcanvas-menu-link"
                    >
                      {item.label}
                      <span className="d-inline-block animate-arrow-up">
                        <ArrowUpRight />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 px-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-btn theme-toggle-btn--dark-bar w-100 justify-content-center py-2"
              >
                <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'} />
                <span>Switch to {isDark ? 'Light' : 'Dark'} Theme</span>
              </button>
            </div>
          </nav>
        </div>
        <nav className="pb-10">
          <ul className="d-flex flex-wrap gap-x-4 align-items-center offcanvas-social-links p-0 list-unstyled">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-all offcanvas-social-link"
                  aria-label={s.name}
                >
                  <i className={s.iconClass} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
