import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE, SOCIAL_LINKS } from '../../data/siteData';
import { useCountUp } from '../../hooks/useCountUp';
import { ArrowUpRight, HeroSpinBadge, SocialSvgIcon } from '../Icons';

export const HeroSection: React.FC = () => {
  const { ref, display } = useCountUp(1.2, 1);

  return (
    <section className="bg-secondary position-relative pt-140 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-content-wrapper">
              <span
                className="font-Syne text-dark fw-bold lh-1 text-2xl d-flex flex-wrap align-items-center hello-iam"
                data-reveal="fade-right"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                    <path d="M0 1H65" stroke="#080808" />
                  </svg>
                </span>
                Hello, I&apos;m
                <img decoding="async" src="/assets/wp-content/uploads/2024/07/victory.png" alt="Wave" />
              </span>

              <h1
                className="hero-title font-Syne fw-bold position-relative z-1 circle-shape"
                data-reveal="fade-right"
              >
                {PROFILE.firstName}
              </h1>
              <h2 className="hero-title font-Syne fw-bold mb-20" data-reveal="fade-right">
                {PROFILE.lastName}
              </h2>
              <p
                className="font-Syne fw-bold text-lg leading-tight iam-designer mb-30"
                data-reveal="fade-right"
              >
                {PROFILE.tagline}
              </p>

              <div className="d-flex flex-wrap hero-btn-wraper" data-reveal="fade-right">
                <span>
                  <Link to="/contact" className="d-flex align-items-center flex-wrap btn-primary">
                    Let&apos;s Talk
                    <span className="animate-arrow-up">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </span>
                <span>
                  <Link to="/projects" className="d-flex align-items-center flex-wrap btn-primary-outline">
                    My Work
                    <span className="animate-arrow-up">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </span>
              </div>

              <div className="d-flex flex-wrap align-items-center" data-reveal="fade-right">
                <div className="d-flex flex-wrap align-items-center">
                  <span className="font-Syne text-dark fw-bold text-counter lh-1">
                    <span ref={ref} className="counter">
                      {display}
                    </span>
                    k+
                  </span>
                  <span className="text-worldwide text-lg">Worldwide client</span>
                </div>

                <span className="mx-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="14" viewBox="0 0 2 14" fill="none">
                    <path d="M1 0L1 14" stroke="#080808" strokeOpacity="0.4" />
                  </svg>
                </span>

                <div className="social-links">
                  <ul className="d-flex flex-wrap align-items-center list-unstyled">
                    {SOCIAL_LINKS.map((s, idx) => (
                      <li key={s.name}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-dark"
                          aria-label={s.name}
                        >
                          <SocialSvgIcon index={idx} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-none d-md-block">
        <img
          decoding="async"
          className="position-absolute top-0 end-0 hero-image"
          data-reveal="fade-left"
          src="/assets/wp-content/uploads/2024/07/hero.png"
          alt={PROFILE.fullName}
        />
        <Link to="/contact" className="contact-spin" aria-label="Contact Me">
          <HeroSpinBadge />
        </Link>
      </div>
    </section>
  );
};
