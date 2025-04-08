import React from 'react';
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
  {
    id: 'student-management',
    name: 'Student Management System',
    year: 'MERN STACK PROJECT',
    align: 'right',
    image: '/images/SM1.png',
  },
  {
    id: 'food-delivery',
    name: 'Food Delivery Website',
    year: 'Reactjs',
    align: 'left',
    image: '/images/FD1.png',
  },
  {
    id: 'house-rental',
    name: 'House Rental Website',
    year: 'Reactjs/Laravel',
    align: 'right',
    image: '/images/RW2.png',
  },
  {
    id: 'university',
    name: 'University Website',
    year: 'Reactjs',
    align: 'left',
    image: '/images/UF1.png',
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 scroll-mt-24">
      {/* Title animation */}
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ProjectsText />
      </motion.div>

      {/* Projects list with smooth stagger animation */}
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn("up", index * 0.2)} // Staggered delay
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <SingleProject
              id={project.id}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
