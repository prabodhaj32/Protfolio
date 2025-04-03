import React from 'react';

const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const FooterMain = () => {
    return (
        <div className="px-1">
            <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
            <div className="flex flex-col md:flex-row justify-between mt-4 max-w-[1200px] mx-auto">
                <p className="text-3xl text-lightGrey">Prabodha Jayawardhana</p>
                <ul className="flex flex-col md:flex-row gap-4 text-lightGrey text-xl mt-4 md:mt-0">
                    {links.map((item, index) => {
                        return (
                            <li key={index}>
                                <a 
                                    href={`#${item.section}`}
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {item.link}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
                © 2024 Abdelrahman | All Rights Reserved.
            </p>
        </div>
    );
};

export default FooterMain;