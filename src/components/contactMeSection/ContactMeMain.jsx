import React from 'react';

import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[80px] md:mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-6 md:gap-8 bg-blue2 p-4 md:p-6 rounded-2xl lg:flex-row md:flex-col sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
