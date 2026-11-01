import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="overflow-x-hidden" data-reveal="fade-up">
          <div className="footer-grid">
            <div className="pt-12">
              <h3 className="section-title text-white mb-0">
                <span className="position-relative circle-shape footer-shape">Le</span>t’s work together
              </h3>
              <div className="d-flex flex-wrap align-items-center mt-10">
                <span className="text-xl fw-bold font-Syne text-white">Based in Germany |</span>
                <div className="footer-social">
                  <ul className="d-flex flex-wrap gap-x-4 align-items-center list-unstyled p-0 footer-social-links">
                    {SOCIAL_LINKS.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white footer-social-link"
                          aria-label={s.name}
                        >
                          <i className={s.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-between service-contact-card-footer">
              <h3 className="text-xl fw-bold font-Syne text-white">Looking for a hectic designer?</h3>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-2xl fw-bold font-Syne leading-none text-warning">
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </p>
                <a href={`mailto:${PROFILE.email}`} className="text-white animate-arrow-up" aria-label="Email">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-between service-contact-card-footer">
              <h3 className="text-xl fw-bold font-Syne text-white">Want a more in-depth look at my history?</h3>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-2xl fw-bold font-Syne leading-none text-warning">
                  <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                </p>
                <a href={`tel:${PROFILE.phone}`} className="text-white animate-arrow-up" aria-label="Call">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.6667 28.3334L28.3334 11.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 11.6667H28.3334V28.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="py-72">
                <img
                  className="w-100"
                  src="/assets/wp-content/uploads/2024/07/ft-ctn.png"
                  alt="Perez"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 copyright">
            <div className="row">
              <div className="col-12 col-sm-8 order-last order-sm-first">
                <p className="text-white text-lg fw-normal font-sans leading-7">
                  ©{new Date().getFullYear()} {PROFILE.fullName}, All Rights Reserved
                </p>
              </div>
              <div className="col-12 col-sm-4 order-first order-sm-last">
                <div className="d-flex justify-content-end mb-2 mb-sm-0">
                  <a
                    id="scrollUp"
                    onClick={scrollToTop}
                    className="d-flex flex-wrap align-items-center gap-2"
                    href="#top"
                    aria-label="Scroll to top"
                  >
                    <span className="text-white text-lg fw-normal font-sans leading-7 transition-all">
                      Back To Top
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 19V5"
                        stroke="#FFB646"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 12L12 5L5 12"
                        stroke="#FFB646"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
