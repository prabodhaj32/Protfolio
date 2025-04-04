import React from 'react';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

const ContactMeRight = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-10">
        <img
          src="/images/email-image.png"
          alt="email image"
          className="max-w-[100px]"
        />
       <ContactInfo/>
       <ContactSocial/>
      </div>
    );
};

export default ContactMeRight;