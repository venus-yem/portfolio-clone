import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TESTIMONIALS } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';
import { QuoteIcon } from '../Icons';

export const TestimonialsSection: React.FC = () => {
  const { isDark } = useTheme();
  const textColor = isDark ? 'text-white' : 'text-dark';

  return (
    <section
      className={`${isDark ? 'bg-dark' : 'bg-white'} py-120 testimonial`}
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 mb-8 mb-lg-0">
            <div className="fw-bold font-Syne leading-none d-flex flex-wrap flex-column gap-y-2">
              <span className="text-warning text-xl">Testimonial</span>
              <h3 className={`section-title ${textColor}`}>
                <span className="position-relative circle-shape testimonial-shape">Cl</span>ient feedback
              </h3>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2, spaceBetween: 45 },
                992: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 45 },
              }}
            >
              {TESTIMONIALS.map((item) => (
                <SwiperSlide key={item.id}>
                  <span className="d-inline-block qotation-icon">
                    <QuoteIcon isDark={isDark} />
                  </span>
                  <p className={`testimonial-texts fw-bold font-Syne ${isDark ? '' : 'text-dark'}`}>
                    {item.quote}
                  </p>
                  <h4
                    className={`d-flex flex-wrap align-items-center gap-4 ${textColor} testimonial-qotation-name font-Syne`}
                  >
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="2" viewBox="0 0 48 2" fill="none">
                        <path d="M0 1H48" stroke={isDark ? '#fff' : '#080808'} />
                      </svg>
                    </span>
                    {item.author}
                  </h4>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
