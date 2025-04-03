import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />;
            {index < 2 ? (
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};


export default AllExperiences
