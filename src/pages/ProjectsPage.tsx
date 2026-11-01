import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BENTO_PROJECTS } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight40 } from '../components/Icons';

/**
 * The original projects.html staggers its seven tiles 600/800/1000/1200/1400
 * and then wraps. This clone has ten, so the cadence repeats on a 5-step cycle.
 */
const BENTO_STAGGER = [600, 800, 1000, 1200, 1400];

export const ProjectsPage: React.FC = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.title = 'Projects — Perez';
  }, []);

  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} pt-20 pb-120`}>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12" data-aos="flip-down" data-aos-delay="400">
            <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-10">
              <span className="text-warning text-xl">Portfolio</span>
              <h3 className={`section-title ${isDark ? 'text-white' : 'text-dark'}`}>
                My recent <span className="position-relative circle-shape portfolio-shape">wo</span>rk
              </h3>
            </div>
          </div>
        </div>

        <div className="row g-6">
          {BENTO_PROJECTS.map((proj, projIndex) => (
            <div
              key={proj.slug}
              className={proj.bentoColClass || 'col-12 col-md-6'}
              data-aos="flip-down"
              data-aos-delay={BENTO_STAGGER[projIndex % BENTO_STAGGER.length]}
            >
              <div className="overflow-hidden position-relative project-item">
                <img
                  decoding="async"
                  className="w-100 h-100"
                  src={proj.cardImage}
                  alt={proj.title}
                />
                <div className="position-absolute project-item-content">
                  <div className="d-flex flex-wrap align-items-center justify-content-between project-item-contet-wrap">
                    <h4 className="fw-bold font-Syne text-center leading-10 project-title">
                      <Link className="transition-all" to={`/projects/${proj.slug}`}>
                        {proj.title}
                      </Link>
                    </h4>
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="animate-arrow-up"
                      aria-label={proj.title}
                    >
                      <ArrowUpRight40 />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
