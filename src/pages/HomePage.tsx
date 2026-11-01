import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { AboutSummarySection } from '../components/sections/AboutSummarySection';
import { ResumeTabsSection } from '../components/sections/ResumeTabsSection';
import { FeaturedWorkSection } from '../components/sections/FeaturedWorkSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { BrandCarouselSection } from '../components/sections/BrandCarouselSection';
import { PricingSection } from '../components/sections/PricingSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Perez — Personal Portfolio';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSummarySection />
      <ResumeTabsSection layout="sidebar" />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <BrandCarouselSection delay={600} />
      <PricingSection />
    </>
  );
};
