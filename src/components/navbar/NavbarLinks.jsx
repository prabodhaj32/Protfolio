import React from 'react';
const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];




const NavbarLinks = () => {
  return ( 
    <ul className="flex  gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg bg-gradient-to-r from-blue to-Pink sm:w-full py-4 p-6 rounded-r-full rounded-l-full">
        {links.map((link,index) => {
            return (
                <li key={index}>
                    <a href="0" className="cursor-pointer text-white hover:text-cyan transition-all duration-500">{link.link}</a>
                    
                    <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
            );
        })}
    </ul>
  
  );
};

export default NavbarLinks