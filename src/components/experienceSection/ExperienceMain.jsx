import React from 'react';
import AllExperiences from './AllExperiences';
import ExperienceText from './ExperienceText';
import ExperienceTop from './ExperienceTop';

const ExperienceMain = () => {
  return (
    <div className="experience-main">
      <ExperienceTop />
      <AllExperiences /> 
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <ExperienceText />
    </div>
  );
};

export default ExperienceMain;