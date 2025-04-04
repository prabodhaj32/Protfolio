import React from 'react'
import HeroText from './HeroText';
import HeroPic from './HeroPic';

const HeroMain = () => {
  return (
    <div className="pt-[150px] pb-[150px]">
        <div className="flex md:flex-row sm:flex-col max-w-[1400px] mx-auto justify-between items-center relative px-8">
        <HeroText/>
        <HeroPic/>
    </div>
    </div>
  );
};

export default HeroMain