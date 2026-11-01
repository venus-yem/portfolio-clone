import React from 'react';
import { PROFILE } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import { imageSize } from '../../data/imageDimensions';
import { ArrowUpRight } from '../Icons';

export const AboutSummarySection: React.FC = () => {
  const { isDark } = useTheme();
  const titleColor = isDark ? 'text-white' : 'text-dark';
  const aboutImage = isDark
    ? '/assets/wp-content/uploads/2024/07/about-white-1.png'
    : '/assets/wp-content/uploads/2024/07/about1.png';

  return (
    <section
      className={`about-section pb-120 ${isDark ? 'bg-dark dark-paragraph' : 'bg-white'}`}
      data-aos="zoom-out"
      data-aos-delay="800"
    >
      <div className="container">
        {/* row-gap-24: Bootstrap rows only carry a horizontal gutter
            (--bs-gutter-y is 0), so these two columns touch once they
            stack below the 992px lg breakpoint. */}
        <div className="row row-gap-24">
          <div className="col-12 col-lg-6">
            <div className="position-relative">
              <img
                decoding="async"
                loading="lazy"
                className="img-fluid"
                src={aboutImage}
                alt={PROFILE.fullName}
                {...(imageSize(aboutImage) ?? {})}
              />
              <div className="d-flex flex-wrap flex-column position-absolute years-of-experience">
                <span
                  className={`years-experience-of-number ${titleColor} fw-bold font-Syne leading-none d-inline-block position-relative`}
                >
                  12+
                </span>
                <span className="strock-text">
                  Years of <br /> experience
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 about-grid-space-right">
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
              <span className="text-warning text-xl">Hello I’m</span>
              <h3 className={`section-title circle-shape ${titleColor} position-relative`}>
                Mark Henry, Product Designer
              </h3>
              <h4 className={`based-in-german-title ${titleColor}`}>Based in German</h4>
              <p className="paragraph mb-5">
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                only reflects who you are and what you stand for, but words that truly land with those that
                read them, calling your audience in and making them.
              </p>

              <ul className="award-lists d-flex flex-wrap p-0 list-unstyled">
                {PROFILE.stats.map((st) => (
                  <li key={st.label} className="award-lists-item">
                    <span className={`${titleColor} text-32 fw-bold font-Syne position-relative`}>
                      {st.value}
                    </span>
                    <p className="paragraph">{st.label}</p>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap">
                <a
                  href={PROFILE.resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex flex-wrap align-items-center btn-primary"
                >
                  Download my resume
                  <span className="d-inline-block animate-arrow-up">
                    <ArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
