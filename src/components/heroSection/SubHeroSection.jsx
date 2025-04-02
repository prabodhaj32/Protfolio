import React from 'react'

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGrey text-grey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-5 items-center gap-4 bg-gradient-to-r from-blue to-purple">
        <p className="md:block sm:hidden">Fast Learner</p>
        <p className="md:block sm:hidden">Team work</p>
        <p>Details Master</p>
    </div>
  );
};

export default SubHeroSection