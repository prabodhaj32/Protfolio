import React from "react";
import { Link } from "react-scroll";

const links = [
  { label: "About Me", section: "about" },
  { label: "Skills", section: "skills" },
  { label: "Experience", section: "experience" },
  { label: "Projects", section: "projects" },
  { label: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg bg-gradient-to-r from-blue to-pink sm:w-full py-4 px-6 rounded-full">
      {links.map((item, index) => (
        <li key={index} className="group relative">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={item.section}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {item.label}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
