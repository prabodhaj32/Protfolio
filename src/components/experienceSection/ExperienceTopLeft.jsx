import React from 'react'
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4 text-white">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-white">-</p>
        <ExperienceInfo number="06" text="Websites" />
      </div>
      <p className="text-center text-white">
        With 3 years of experience building dynamic and user-friendly web
        applications.
      </p>
      {/* <ExperienceInfo number="$1" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
