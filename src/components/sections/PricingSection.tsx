import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUpRight } from '../Icons';

export const PricingSection: React.FC = () => {
  const { isDark } = useTheme();
  const headingColor = isDark ? 'text-white' : 'text-dark';

  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} pb-120`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-16">
              <div
                className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 pricing-title-section"
                data-reveal="fade-up"
              >
                <span className="text-warning text-xl">Pricing</span>
                <h3 className={`section-title ${headingColor}`}>
                  Stay chill and pick your{' '}
                  <span className="position-relative circle-shape priceing-shape">pl</span>an
                </h3>
              </div>

              <div className="d-flex contact-for-custom-project" data-reveal="fade-up">
                <Link to="/contact" className="d-flex align-items-center flex-wrap btn-primary">
                  Contact for Custom Project
                  <span className="d-inline-block ml-3 animate-arrow-up">
                    <ArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="prcing-grid">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="transition-all d-flex flex-wrap flex-column pricing-item"
              data-reveal="fade-up"
            >
              <div className="d-flex align-items-center justify-content-between">
                <span className="text-lg fw-normal font-sans leading-none pricing-plan">{plan.name}</span>
                <span className="fw-bold text-xl font-Syne pricing-rate">{plan.rate}</span>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-end">
                <div>
                  <h4 className={`fw-bold font-Syne leading-10 text-32 ${headingColor} mb-1`}>
                    {plan.hours}
                  </h4>
                  <p className="text-lg fw-normal font-sans leading-none pricing-plan">{plan.subtitle}</p>
                </div>
                <Link to={plan.to} className="animate-arrow-up" aria-label={`Choose ${plan.name}`}>
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
