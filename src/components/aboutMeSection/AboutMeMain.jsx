import React from 'react'
import AboutMeText from './AboutMeText';
import AboutMeimage from './AboutMeimage';
import { motion } from "framer-motion";

const improvedFadeIn = (direction = "right", delay = 0.2) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 18,
        delay: delay,
        duration: 1,
        ease: [0.25, 0.6, 0.3, 1]
      }
    }
  };
};

const AboutMeMain = () => {
  return (
    <div id="about">
      <div className="flex pt-[2px] pb-[150px] md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
        <motion.div
          variants={improvedFadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutMeText />
        </motion.div>

        <motion.div
          variants={improvedFadeIn("left", 0.4)} // Slight extra delay for staggered feel
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AboutMeimage />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;
