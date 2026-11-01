import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { imageSize } from '../data/imageDimensions';
import { getProjectsByTag } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight40 } from '../components/Icons';

/** Mirrors the /projects cadence — there is no original template for this route. */
const TAG_STAGGER = [600, 800, 1000, 1200, 1400];

export const ProjectTagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const { isDark } = useTheme();
  const projects = getProjectsByTag(tag);
  const tagLabel = (tag || 'Projects')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const headingColor = isDark ? 'text-white' : 'text-dark';

  useEffect(() => {
    document.title = `${tagLabel} — Perez`;
  }, [tagLabel]);

  return (
    <section className={`${isDark ? 'bg-dark' : 'bg-white'} pt-20 pb-120`}>
      <div className="container">
        <div className="row mb-10">
          <div className="col-12" data-aos="flip-down" data-aos-delay="400">
            <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2">
              <span className="text-warning text-xl">Tag: {tagLabel}</span>
              <h3 className={`section-title ${headingColor}`}>
                Filtered <span className="position-relative circle-shape portfolio-shape">wo</span>rk
              </h3>
            </div>
          </div>
        </div>

        <div className="row g-6">
          {projects.map((proj, projIndex) => (
            <div
              key={proj.slug}
              className="col-12 col-md-6"
              data-aos="flip-down"
              data-aos-delay={TAG_STAGGER[projIndex % TAG_STAGGER.length]}
            >
              <div className="rounded-20 overflow-hidden mb-6">
                <Link to={`/projects/${proj.slug}`}>
                  <img
                    decoding="async"
                    loading="lazy"
                    className="w-100 img-fluid"
                    src={proj.homeCardImage || proj.cardImage}
                    alt={proj.title}
                    {...(imageSize(proj.homeCardImage || proj.cardImage) ?? {})}
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
                  className={`d-flex flex-wrap align-items-center justify-content-between ${headingColor} portfolio-title`}
                >
                  <h4 className="fw-bold font-Syne text-center leading-10 portfolio-link">
                    <Link className="transition-all" to={`/projects/${proj.slug}`}>
                      {proj.title}
                    </Link>
                  </h4>
                  <Link className="animate-arrow-up" to={`/projects/${proj.slug}`} aria-label={proj.title}>
                    <ArrowUpRight40 />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
