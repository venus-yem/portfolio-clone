import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE, SERVICES } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUpRight, ServiceIcons } from '../Icons';

export const ServicesSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className={isDark ? 'dark-paragraph py-120 bg-dark' : 'py-120 bg-white'}>
      <div className="container">
        <div className="row mb-12 align-items-center" data-aos="fade-up" data-aos-delay="400">
          <div className="col-12 col-lg-6">
            <div className="fw-bold font-Syne lh-1 d-flex flex-wrap flex-column gap-y-2">
              <span className="text-warning text-xl">Services</span>
              <h3
                className={`${
                  isDark ? 'text-white' : 'text-dark'
                } section-title position-relative circle-shape`}
              >
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p className="paragraph">
              Synergistically seize front-end methods of empowerment without extensive core competencies.
              Progressively repurpose alternative platforms
            </p>
          </div>
        </div>

        {/* row-gap-24 matches the service grid's own vertical rhythm. It only
            does anything below 1280px, where col-xl-8 and col-xl-4 stop sitting
            side by side and stack — Bootstrap's --bs-gutter-y is 0, so without
            it the "Say Hello!" card butts straight up against the last card. */}
        <div className="row row-gap-24">
          <div className="col-12 col-xl-8">
            <div className="row row-gap-24">
              {SERVICES.map((svc, svcIndex) => (
                <div key={svc.projectSlug} className="col-12 col-sm-6 col-md-4">
                  <div
                    className="service-card"
                    data-aos="fade-up"
                    data-aos-delay={500 + svcIndex * 200}
                  >
                    <div className="d-flex flex-wrap align-items-center justify-content-center service-icon">
                      <ServiceIcons index={svc.iconIndex} />
                    </div>
                    <h4>
                      <Link
                        to={`/projects/${svc.projectSlug}`}
                        className="d-flex flex-wrap align-items-end justify-content-between fw-bold text-xl font-Syne service-card-link"
                      >
                        <span>
                          {svc.line1} <br /> {svc.line2}
                        </span>
                        <span className="animate-arrow-up">
                          <ArrowUpRight />
                        </span>
                      </Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-xl-4" data-aos="zoom-in" data-aos-delay="1000">
            <div className="d-flex flex-wrap flex-column justify-content-between service-contact-card">
              <div className="d-flex flex-wrap justify-content-end">
                <Link to="/contact" className="animate-arrow-up" aria-label="Contact">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.3333 56.6666L56.6667 23.3333"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.3333 23.3333H56.6667V56.6666"
                      stroke="#FFB646"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="d-flex flex-column flex-wrap gap-y-2">
                <span className="text-warning text-lg fw-normal lh-1">SAY HELLO!</span>
                <h4 className="text-white text-2xl fw-bold font-Syne lh-1 say-hello-email">
                  {PROFILE.email}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
