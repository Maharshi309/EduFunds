import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedScholarships from '../components/home/FeaturedScholarships';
import LatestUpdates from '../components/home/LatestUpdates';
import StatisticsSection from '../components/home/StatisticsSection';
import HowItWorks from '../components/home/HowItWorks';
import { getFeaturedScholarships } from '../data/scholarships';

const HomePage: React.FC = () => {
  const featuredScholarships = getFeaturedScholarships();

  return (
    <div>
      <HeroSection />
      <FeaturedScholarships scholarships={featuredScholarships} />
      <StatisticsSection />
      <HowItWorks />
      <LatestUpdates />
    </div>
  );
};

export default HomePage;