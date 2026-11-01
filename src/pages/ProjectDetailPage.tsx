import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProjectBySlug, getRelatedProjects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { FeaturedWorkSection } from '../components/sections/FeaturedWorkSection';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isDark } = useTheme();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Perez`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const headingColor = isDark ? 'text-white' : 'text-dark';
  const related = getRelatedProjects(project.slug);
  const tagSlug = project.primaryTag.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <>
      {/* 1. Project Header & Banner */}
      <section className={`${isDark ? 'clr-dark ' : ''}bg-secondary pt-20`}>
        <div className="max-w-1075 mx-auto banner-contents" data-reveal="fade-up">
          <div className="row pb-12">
            <div className="col-12 col-lg-6 mb-10">
              <ul className="d-flex flex-wrap text-sm fw-normal font-Inter leading-tight p-0 list-unstyled">
                <li className="blog-meta-item">
                  <Link to={`/project-tag/${tagSlug}`}>{project.primaryTag}</Link>
                </li>
                <li className="blog-meta-item">
                  <span>{project.date}</span>
                </li>
              </ul>
              <h4 className="text-dark fw-bold font-Syne leading-snug banner-title lh-1">
                {project.title}
              </h4>
            </div>

            <div className="col-12 col-lg-6">
              <ul className="d-flex flex-wrap gap-y-6 gy-lg-0 clients-info">
                <li className="d-flex flex-wrap flex-column gap-2 clients-info-item">
                  <span className="clients-info-text text-sm fw-normal font-Inter leading-tight">
                    Client
                  </span>
                  <h2 className="text-dark text-15 fw-bold font-sans leading-none">{project.client}</h2>
                </li>
                <li className="d-flex flex-wrap flex-column gap-2 clients-info-item">
                  <span className="clients-info-text text-sm fw-normal font-Inter leading-tight">
                    Category
                  </span>
                  <h2 className="text-dark text-15 fw-bold font-sans leading-none">{project.category}</h2>
                </li>
                <li className="d-flex flex-wrap flex-column gap-2 clients-info-item">
                  <span className="clients-info-text text-sm fw-normal font-Inter leading-tight">Tools</span>
                  <h2 className="text-dark text-15 fw-bold font-sans leading-none">
                    {project.tools.join(', ')}
                  </h2>
                </li>
                <li className="d-flex flex-wrap flex-column gap-2 clients-info-item">
                  <span className="clients-info-text text-sm fw-normal font-Inter leading-tight">
                    Start date
                  </span>
                  <h2 className="text-dark text-15 fw-bold font-sans leading-none">{project.startDate}</h2>
                </li>
                <li className="d-flex flex-wrap flex-column gap-2 clients-info-item">
                  <span className="clients-info-text text-sm fw-normal font-Inter leading-tight">
                    End date
                  </span>
                  <h2 className="text-dark text-15 fw-bold font-sans leading-none">{project.endDate}</h2>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-12">
            <div className="col-12">
              <img
                decoding="async"
                className="w-full rounded-20"
                src={project.heroImage}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Case Study Body */}
      <section
        className={`${
          isDark ? 'bg-dark dark-paragraph' : 'bg-white'
        } pb-120 project-details-section`}
      >
        <div className="max-w-1075 mx-auto banner-contents">
          <div className="grid grid-cols-1">
            <h3 className={`${headingColor} text-32 fw-bold font-Syne leading-10 mb-4`}>Overview</h3>
          </div>
          {project.overviewParagraphs.map((para, i) => (
            <div key={i} className="grid grid-cols-1">
              <p className="paragraph mb-12">{para}</p>
            </div>
          ))}

          <div className="grid grid-cols-1">
            <ul className={`list-style-squre ${headingColor} text-xl fw-bold font-Syne mb-12 list-unstyled`}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1">
            <h3 className={`${headingColor} text-32 fw-bold font-Syne leading-10 mb-4`}>Typography</h3>
          </div>
          <div className="grid grid-cols-1">
            <p className="paragraph mb-12">{project.typographyBody}</p>
          </div>

          <div className="row gy-6 mb-12">
            <div className="col-12 col-sm-5">
              <img
                decoding="async"
                className="w-100 h-100 rounded-20"
                src={project.galleryImages[0]}
                alt={`${project.title} showcase 1`}
              />
            </div>
            <div className="col-12 col-sm-7">
              <img
                decoding="async"
                className="w-100 h-100 rounded-20"
                src={project.galleryImages[1]}
                alt={`${project.title} showcase 2`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <h3 className={`${headingColor} text-32 fw-bold font-Syne leading-10 mb-4`}>Conclusion</h3>
          </div>
          <div className="row mb-n6">
            <div className="col-12 col-lg-6 mb-6">
              <p className="paragraph">{project.conclusionColumns[0]}</p>
            </div>
            <div className="col-12 col-lg-6 mb-6">
              <p className="paragraph">{project.conclusionColumns[1]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Work */}
      <FeaturedWorkSection
        projects={related}
        headingPrefix="Related"
        showViewAllButton={false}
        bgClass={`${isDark ? 'bg-dark' : 'bg-white'} pb-120`}
        darkText={!isDark}
      />
    </>
  );
};
