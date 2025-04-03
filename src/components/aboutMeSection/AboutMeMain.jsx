import React from 'react'
import AboutMeText from './AboutMeText';
import AboutMeimage from './AboutMeimage';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Assuming fadeIn is defined something like this in your variants file
// If not, you can modify it there or add it here
const improvedFadeIn = (direction, delay) => {
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
        duration: 0.8, // Smooth duration
        delay: delay,
        ease: [0.25, 0.65, 0.35, 1], // Custom easing for smoother feel
        stiffness: 100, // For spring animation
        damping: 20 // Controls bounciness
      }
    }
  };
};

const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
      <motion.div
        variants={improvedFadeIn("right", 0.2)} // Slight delay for staggered effect
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Changed to once: true and lower amount for earlier trigger
      >
        <AboutMeText/>
      </motion.div>
      <motion.div
        variants={improvedFadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AboutMeimage/>
      </motion.div>
    </div>
  );
};

export default AboutMeMain;