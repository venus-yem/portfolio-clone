import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_FEATURED_PROJECTS, ProjectItem } from '../../data/projects';
import { ArrowUpRight, ArrowUpRight40 } from '../Icons';

interface FeaturedWorkSectionProps {
  projects?: ProjectItem[];
  headingPrefix?: string;
  showViewAllButton?: boolean;
  bgClass?: string;
  darkText?: boolean;
  /** AOS animation name. Home fades up; Project Detail flips down. */
  reveal?: string;
  /** Per-card AOS stagger in ms, in card order. */
  cardDelays?: number[];
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  projects = HOME_FEATURED_PROJECTS,
  headingPrefix = 'My recent',
  showViewAllButton = true,
  bgClass = 'bg-secondary py-120',
  darkText = true,
  reveal = 'fade-up',
  cardDelays = [600, 800],
}) => {
  const titleColor = darkText ? 'text-dark' : 'text-white';
  // A delay of 0 omits the attribute entirely, matching the original markup
  // (aos.css has no [data-aos-delay="0"] rule, so "0" would fall back to the
  // 100ms body-level default instead of no delay).
  const delayFor = (index: number) => {
    const value = cardDelays[index] ?? cardDelays[cardDelays.length - 1];
    return value ? value : undefined;
  };

  return (
    <section className={bgClass}>
      <div className="container">
        <div className="row mb-n6">
          <div className="col-12" data-aos={reveal} data-aos-delay="400">
            <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
              <span className="text-warning text-xl">Portfolio</span>
              <h3 className={`section-title ${titleColor}`}>
                {headingPrefix}{' '}
                <span className="position-relative circle-shape portfolio-shape">w</span>ork
              </h3>
            </div>
          </div>

          {projects.map((proj, projIndex) => (
            <div
              key={proj.slug}
              className="col-12 col-md-6 mb-6"
              data-aos={reveal}
              data-aos-delay={delayFor(projIndex)}
            >
              <div className="rounded-20 overflow-hidden mb-6">
                <Link to={`/projects/${proj.slug}`}>
                  <img
                    decoding="async"
                    className="w-100"
                    src={proj.homeCardImage || proj.cardImage}
                    alt={proj.title}
                  />
                </Link>
              </div>
              <div className="d-flex flex-wrap flex-column gap-3">
                <div className="d-flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/project-tag/${t.slug}`}
                      className="text-xs fw-medium font-Inter leading-none px-4 rounded-40 portfolio-tag-link"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
                <div
                  className={`d-flex flex-wrap align-items-center justify-content-between ${titleColor} portfolio-title`}
                >
                  <h4 className="fw-bold font-Syne text-center leading-10 portfolio-link">
                    <Link className="transition-all" to={`/projects/${proj.slug}`}>
                      {proj.title}
                    </Link>
                  </h4>
                  <Link
                    className="animate-arrow-up"
                    to={`/projects/${proj.slug}`}
                    aria-label={proj.title}
                  >
                    <ArrowUpRight40 />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAllButton && (
          <div className="col-12 mt-12" data-aos={reveal} data-aos-delay="600">
            <div className="d-flex justify-content-center">
              <Link to="/projects" className="d-flex align-items-center flex-wrap btn-primary">
                View All Project
                <span className="d-inline-block animate-arrow-up">
                  <ArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
