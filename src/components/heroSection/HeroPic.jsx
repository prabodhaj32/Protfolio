import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsHexagon } from "react-icons/bs";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
        <img src="/images/praPic.png" alt="Prabodha Jayawardhana" className="max-h-[300px] w-auto" />
        <div className="absolute -z-10 flex justify-center items-center animate-pulse">
         <BsHexagon className="md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-cyan blur-md animate-[spin_20s_Linear_infinite]" />  
        </div>
    </motion.div>
  )
}

export default HeroPic