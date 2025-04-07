import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants"; // Assuming this is your fadeIn variant

const educationData = [
  {
    title: 'Higher Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    duration: '2023 - Present',
    location: 'Kandy, Sri Lanka',
    side: 'left',
  },
  {
    title: ' Diploma in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    duration: '2022 - 2023',
    location: 'Kandy, Sri Lanka',
    side: 'right',
  },
  {
    title: ' Diploma in Information Technology',
    institution: 'ESOFT METRO CAMPUS',
    duration: '2017 - 2018',
    location: 'Kandy, Sri Lanka',
    side: 'left',
  },
  {
    title: ' Diploma in English',
    institution: 'ESOFT METRO CAMPUS',
    duration: '2017 - 2018',
    location: 'Kandy, Sri Lanka',
    side: 'right',
  },
  {
    title: 'Advanced Level',
    institution: 'K/Jinaraja Boys College',
    duration: '2017 - 2019',
    location: 'Gampola, Sri Lanka',
    side: 'left',
  },
];

const Education = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16 px-6">
      <h2 className="text-6xl text-cyan-200 mb-10 text-center text-cyan">
        Education
      </h2>

      <div className="relative max-w-3xl mx-auto min-h-[400px]">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white z-0 top-0 bottom-0"></div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn} // Apply the fade-in animation
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`relative flex items-center w-full ${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content on one side */}
              <motion.div
                className="w-1/2 p-6"
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.5, duration: 1 }}
              >
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.duration}</p>
                <p className="text-sm text-gray-400">{item.location}</p>
              </motion.div>

              {/* Empty spacer for layout balance */}
              <div className="w-1/2"></div>

              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10"
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.4, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
