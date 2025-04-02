import React from 'react'
import AboutMeText from './AboutMeText';
import AboutMeimage from './AboutMeimage';

const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <div>
        <AboutMeText/>
        </div>
        <div>
        <AboutMeimage/>

        </div>
      
      
    </div>
  );
};

export default AboutMeMain