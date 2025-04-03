import React from 'react'
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/prabodhaj32" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/prabodha_j32" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
