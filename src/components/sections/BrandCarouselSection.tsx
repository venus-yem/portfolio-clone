import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { BRAND_LOGOS_DARK, BRAND_LOGOS_LIGHT } from '../../data/siteData';
import { useTheme } from '../../context/ThemeContext';

interface BrandCarouselSectionProps {
  /** AOS stagger in ms. Home uses 600; the About page ships it with no delay. */
  delay?: number;
}

export const BrandCarouselSection: React.FC<BrandCarouselSectionProps> = ({ delay }) => {
  const { isDark } = useTheme();
  const logos = isDark ? BRAND_LOGOS_DARK : BRAND_LOGOS_LIGHT;

  return (
    <div
      className={`${isDark ? 'bg-dark pb-120' : 'bg-white mb-120'} brandCarousel`}
      data-aos="flip-down"
      {...(delay ? { 'data-aos-delay': delay } : {})}
    >
      <div className="container">
        <Swiper
          className="brand-carousel"
          modules={[Autoplay]}
          spaceBetween={24}
          loop
          speed={2000}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logos.map((logoUrl, idx) => (
            <SwiperSlide key={`${logoUrl}-${idx}`}>
              <img decoding="async" className="mx-auto d-block" src={logoUrl} alt="Client brand logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
