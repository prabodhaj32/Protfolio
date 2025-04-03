import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'

const projects = [
    {
      name: "Vacation of Africa",
      year: "Mar2022",
      align: "right",
      image: "/images/website-img-1.jpg",
      link: "#",
    },
    {
      name: "Moola App",
      year: "Sept2022",
      align: "left",
      image: "/images/website-img-2.webp",
      link: "#",
    },
    {
      name: "Tourzania",
      year: "Jan2023",
      align: "right",
      image: "/images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "Bank of Luck",
      year: "May2024",
      align: "left",
      image: "/images/website-img-4.jpg",
      link: "#",
    },
];

const ProjectsMain = () => {
  return (
    <div>
      <ProjectsText/>
      <div>
        {projects.map((item, index) => {
          return(
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;