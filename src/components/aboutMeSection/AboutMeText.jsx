import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2  className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white text-2xl" >A dedicated Software engineering undergraduate currently studying for
         a higher national diploma at the National institute of Business
         Management (NIBM). looking for an internship or entry level position in
         front-end development where I can improve my skills and learn more in
         a professional environment</p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  )
}

export default AboutMeText