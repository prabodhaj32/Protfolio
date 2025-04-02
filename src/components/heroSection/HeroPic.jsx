import React from 'react'
import { BsHexagon } from "react-icons/bs";

const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
        <img src="/images/praPic.png" alt="Prabodha Jayawardhana" className="max-h-[400px] w-auto" />
        <div className="absolute -z-10 flex justify-center items-center animate-pulse">
         <BsHexagon className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_Linear_infinite]" />  
        </div>
    </div>
  )
}

export default HeroPic