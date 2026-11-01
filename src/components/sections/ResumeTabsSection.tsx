import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AWARD_ITEMS,
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  PERSONAL_DETAILS,
  SKILL_ITEMS,
} from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowUpRight, AwardSvgIcon, SkillSvgIcon, SparkleStarSvg } from '../Icons';

type TabKey = 'about' | 'experience' | 'education' | 'skills' | 'awards';

const TAB_DEFS: { key: TabKey; label: string }[] = [
  { key: 'about', label: 'About Me' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
  { key: 'awards', label: 'Awards' },
];

/**
 * Bootstrap's `.fade` is `transition: opacity .15s linear`. Its Tab plugin runs
 * the two halves back to back — the outgoing pane fades out, and only once that
 * finishes does the incoming pane fade in — so a switch takes ~300ms.
 */
const TAB_FADE_MS = 150;

interface ResumeTabsSectionProps {
  layout?: 'sidebar' | 'centered';
}

export const ResumeTabsSection: React.FC<ResumeTabsSectionProps> = ({ layout = 'sidebar' }) => {
  const { isDark } = useTheme();
  // `activeTab` is what the tab buttons highlight (Bootstrap activates them
  // immediately); `paneTab` is the pane currently painted, which trails by one
  // fade so the outgoing content can animate out first.
  const [activeTab, setActiveTab] = useState<TabKey>('about');
  const [paneTab, setPaneTab] = useState<TabKey>('about');
  const [paneShown, setPaneShown] = useState(true);
  const headingColor = isDark ? 'text-white' : 'text-dark';

  useEffect(() => {
    if (activeTab === paneTab) return;

    setPaneShown(false);
    const timer = window.setTimeout(() => setPaneTab(activeTab), TAB_FADE_MS);
    return () => window.clearTimeout(timer);
  }, [activeTab, paneTab]);

  useEffect(() => {
    if (activeTab !== paneTab || paneShown) return;

    // Two frames, so the pane is painted at opacity 0 before `.show` lands —
    // otherwise the browser has no previous value to transition from.
    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => setPaneShown(true));
    });
    return () => {
      cancelAnimationFrame(outerRaf);
      cancelAnimationFrame(innerRaf);
    };
  }, [activeTab, paneTab, paneShown]);

  const renderTabContent = () => {
    switch (paneTab) {
      case 'about':
        return (
          <div className={`tab-pane fade${paneShown ? ' show' : ''} active`}>
            <div className="tab-contents">
              {layout === 'centered' ? (
                <div className="row">
                  <div className="col-12 col-lg-5 mb-6 mb-lg-0">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="w-100 rounded-20 img-fluid"
                      src="/assets/wp-content/uploads/2024/07/about3.png"
                      alt="About Mark Henry"
                      width={526}
                      height={496}
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>
                      Based in German
                    </h4>
                    <p className="paragraph mb-7">
                      Mark Henry, <span className={headingColor}>Product Designer</span>, based in German.
                      That is where I come in. A lover of words, a wrangler of copy. Here to create copy that
                      not only reflects who you are and what you stand for,
                    </p>
                    <p className="paragraph mb-14">
                      but words that truly land with those that read them, calling your audience in and making
                      them want more.
                    </p>
                    <ul className="flex-column gap-3 d-inline-flex list-unstyled p-0">
                      {PERSONAL_DETAILS.map((row) => (
                        <li key={row.label} className="gap-10 d-inline-flex align-items-center">
                          <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                            {row.label}
                          </span>
                          <span className={`${headingColor} text-2xl fw-bold font-Syne leading-8`}>
                            {row.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>
                    Based in German
                  </h4>
                  <p className="paragraph mb-7">
                    Mark Henry, <span className={headingColor}>Product Designer</span>, based in German. That
                    is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                    only reflects who you are and what you stand for,
                  </p>
                  <p className="paragraph mb-14">
                    but words that truly land with those that read them, calling your audience in and making
                    them want more.
                  </p>
                  <ul className="flex-column gap-3 d-inline-flex list-unstyled p-0">
                    {PERSONAL_DETAILS.map((row) => (
                      <li key={row.label} className="gap-10 d-inline-flex align-items-center">
                        <span className="w-110px text-black-text-800 text-lg fw-normal leading-none">
                          {row.label}
                        </span>
                        <span className={`${headingColor} text-2xl fw-bold font-Syne leading-8`}>
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className={`tab-pane fade${paneShown ? ' show' : ''} active`}>
            <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>
              Experience
            </h4>
            <div className="tab-contents tab-contents-experience gap-x-4 gap-y-5">
              {EXPERIENCE_ITEMS.map((exp, idx) => (
                <div
                  key={`${exp.role}-${idx}`}
                  className="experience-tab-item d-flex flex-wrap flex-column gap-8 justify-content-between"
                >
                  <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">
                    {exp.period}
                  </span>
                  <div>
                    <p
                      className={`dot text-lg fw-normal font-sans leading-7 ${headingColor} position-relative`}
                    >
                      {exp.company}
                    </p>
                    <h4 className={`fw-bold font-Syne leading-normal text-2xl ${headingColor}`}>
                      <Link to={`/projects/${exp.projectSlug}`}>{exp.role}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className={`tab-pane fade${paneShown ? ' show' : ''} active`}>
            <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>
              Education
            </h4>
            <div className="education-tab-contents">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="education-tab-item d-flex flex-wrap">
                  <span className="text-sm fw-normal font-Inter leading-tight text-black-text-800">
                    {edu.period}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`dot text-lg fw-normal font-sans leading-7 ${headingColor} position-relative`}
                    >
                      {edu.institution}
                    </p>
                    <h4 className={`fw-bold font-Syne leading-normal text-2xl ${headingColor}`}>
                      {edu.degree}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className={`tab-pane fade${paneShown ? ' show' : ''} active`}>
            <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>Skills</h4>
            <div className="skills-tab-contents">
              {SKILL_ITEMS.map((sk, idx) => (
                <div key={idx} className="d-flex flex-wrap gap-4 align-items-start skills-tab-item">
                  {isDark ? (
                    <SkillSvgIcon index={sk.iconIndex} />
                  ) : (
                    <img src={sk.lightIcon} alt={sk.name} width={32} height={32} />
                  )}
                  <div className="flex flex-wrap gap-1 flex-1 flex-col">
                    <h4 className={`fw-bold font-Syne leading-normal text-xl ${headingColor}`}>{sk.name}</h4>
                    <p className="text-sm fw-normal font-Inter leading-none text-black-text-800">
                      {sk.percent}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'awards':
        return (
          <div className={`tab-pane fade${paneShown ? ' show' : ''} active`}>
            <h4 className={`${headingColor} text-2xl based-in-german-title-tab fw-bold font-Syne`}>Awards</h4>
            <div className="awards-tab-contents">
              {AWARD_ITEMS.map((aw, idx) => (
                <div key={idx} className="d-flex flex-wrap flex-column awards-tab-item">
                  <div className="d-flex align-items-start justify-content-between">
                    {isDark ? (
                      <AwardSvgIcon index={aw.iconIndex} />
                    ) : (
                      <img src={aw.lightIcon} alt={aw.title} height={42} />
                    )}
                    <span className="fw-normal text-sm font-Inter text-black-text-800">{aw.year}</span>
                  </div>
                  <div>
                    <p
                      className={`dot text-lg fw-normal font-sans leading-7 ${headingColor} position-relative`}
                    >
                      {aw.status}
                    </p>
                    <h4 className={`fw-bold font-Syne leading-normal text-xl ${headingColor}`}>{aw.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  if (layout === 'centered') {
    return (
      <section className={`${isDark ? 'bg-dark-tab dark-paragraph ' : ''}featured-properties`}>
        <div className="container" data-aos="zoom-out" data-aos-delay="800">
          <div className="row">
            <div className="col-12">
              <div className="fw-bold font-Syne text-center leading-none d-flex flex-wrap flex-column gap-y-2 mb-4">
                <span className="text-warning text-xl">Resume</span>
                <h3 className={`section-title ${headingColor} mb-0`}>
                  All over my details find he
                  <span className="d-inline-block position-relative circle-shape portfolio-shape2">re.</span>
                  ..
                </h3>
              </div>

              <div className="tabs nav nav-pills flex-wrap justify-content-center gap-4 mt-8 mb-14" role="tablist">
                {TAB_DEFS.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`tab-btn justify-content-between align-items-center d-inline-flex${
                      activeTab === t.key ? ' active' : ''
                    }`}
                  >
                    {t.label}
                    <span className="inline-block animate-arrow-up">
                      <ArrowUpRight />
                    </span>
                  </button>
                ))}
              </div>

              <div className="tab-content">{renderTabContent()}</div>

              <span className="d-flex justify-content-end mt-14 -mr-3">
                <SparkleStarSvg />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`featured-properties${isDark ? ' dark-paragraph' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 col-2xl-4" data-aos="fade-up" data-aos-delay="300">
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2 mb-4">
              <span className="text-warning text-xl">Resume</span>
              <h3 className={`section-title circle-shape ${headingColor} position-relative`}>
                All over my details find here...
              </h3>
            </div>

            <div className="tabs nav nav-pills flex-wrap flex-lg-column" role="tablist">
              {TAB_DEFS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`tab-btn justify-content-between align-items-center d-inline-flex${
                    activeTab === t.key ? ' active' : ''
                  }`}
                >
                  {t.label}
                  <span className="inline-block animate-arrow-up">
                    <ArrowUpRight />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div
            className="col-12 col-lg-7 col-2xl-8 featured-properties-space-left"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="tab-content">{renderTabContent()}</div>
            <span className="d-flex justify-content-end mt-14 -mr-3">
              <SparkleStarSvg />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
