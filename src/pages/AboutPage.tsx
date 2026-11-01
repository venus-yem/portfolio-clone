import React, { useEffect, useState } from 'react';
import { PROFILE } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { ResumeTabsSection } from '../components/sections/ResumeTabsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BrandCarouselSection } from '../components/sections/BrandCarouselSection';
import { VideoModal } from '../components/VideoModal';

export const AboutPage: React.FC = () => {
  const { isDark } = useTheme();
  const [videoOpen, setVideoOpen] = useState(false);
  const headingColor = isDark ? 'text-white' : 'text-dark';

  useEffect(() => {
    document.title = 'About — Perez';
  }, []);

  return (
    <>
      {/* 1. About Hero Section */}
      <section className="bg-secondary pt-20 pb-120" data-aos="zoom-in">
        <div className="container">
          <div className="about-grid">
            <img
              decoding="async"
              className="mx-auto"
              src="/assets/wp-content/uploads/2024/07/about2.png"
              alt={PROFILE.fullName}
            />
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
              <span className="text-warning text-xl">About me</span>
              <h3 className="text-dark section-title">{PROFILE.fullName}</h3>
              <h4 className="text-dark text-2xl mt-3 mb-4">{PROFILE.role}</h4>
              <p className="text-dark text-xl fw-bold font-Syne leading-7 mb-6">
                A Product Designer &amp; Developer and I am in the game for over 7+ years. I am proud of my
                works and ready to face the next challenge
              </p>
              <p className="paragraph mb-6">
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                only reflects who you are and what you stand for, but words that truly land with those that
                read them, calling your audience in and making them.
              </p>
              <div>
                <img
                  decoding="async"
                  src="/assets/wp-content/uploads/2024/07/signature.svg"
                  alt="Signature"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experience Vision & Stats Section */}
      <section
        className={`${isDark ? 'bg-dark dark-paragraph' : 'bg-white'} py-120 overflow-x-hidden`}
      >
        <div className="container" data-aos="zoom-out">
          <div className="about-grid-section-two">
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
              <h3 className={`${headingColor} section-title mb-5`}>
                My vision is to create happy my clients
              </h3>
              <p className="paragraph mb-7">
                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                only reflects who you are and what you stand for, but words that truly land with those that
                read them, calling your audience in and making them want more.
              </p>
              <ul className="award-lists d-flex flex-wrap p-0 list-unstyled">
                {PROFILE.stats.map((st) => (
                  <li key={st.label} className="award-lists-item">
                    <span className={`${headingColor} text-32 fw-bold font-Syne position-relative`}>
                      {st.value}
                    </span>
                    <p className="paragraph">{st.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-flex flex-column justify-content-end">
              <div className="d-flex flex-wrap flex-column years-of-experience mb-12">
                <span
                  className={`years-experience-of-number ${headingColor} fw-bold font-Syne leading-none d-inline-block position-relative`}
                >
                  12+
                </span>
                <span className="strock-text">
                  Years of <br /> experience
                </span>
              </div>

              <div className="bg-black d-flex flex-wrap justify-content-between align-items-end say-hello-contact-box">
                <div className="d-flex flex-column flex-wrap gap-y-2">
                  <span className="text-warning text-lg fw-normal leading-none">SAY HELLO!</span>
                  <h4 className="text-white text-2xl fw-bold font-Syne leading-none mb-0">
                    <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                  </h4>
                </div>
                <div className="d-flex flex-wrap justify-content-end">
                  <a href={`mailto:${PROFILE.email}`} className="animate-arrow-up" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M14 34L34 14"
                        stroke="#FFB646"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 14H34V34"
                        stroke="#FFB646"
                        strokeWidth="3.5"
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
      </section>

      {/* 3. Video Showcase Section */}
      <div className={`${isDark ? 'bg-dark' : 'bg-white'} pb-120`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="position-relative" data-aos="zoom-in-up">
                <img
                  decoding="async"
                  className="rounded-2xl w-100"
                  src={
                    isDark
                      ? '/assets/wp-content/uploads/2024/07/video.png'
                      : '/assets/wp-content/uploads/2024/07/video-1.png'
                  }
                  alt="Showreel preview"
                />
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="video-popup play-button border-0 bg-transparent p-0"
                  aria-label="Play showreel video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="#ffb646">
                    <circle
                      className="fill-primary group-hover:fill-yellow transition-all duration-300"
                      cx="50"
                      cy="50"
                      r="50"
                    />
                    <path
                      className="stroke-black-800 group-hover:stroke-white"
                      d="M43 41L57 50L43 59V41Z"
                      strokeOpacity="0.9"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="#111"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        embedUrl={PROFILE.youtubeVideoEmbed}
        onClose={() => setVideoOpen(false)}
      />

      {/* 4. Centered Resume Tabs */}
      <ResumeTabsSection layout="centered" />

      {/* 5. Testimonials & Client Logos */}
      <TestimonialsSection />
      <BrandCarouselSection />
    </>
  );
};
