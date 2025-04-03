import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="prabodharg1954@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="076 5470090" Image={FiPhone} />
      <SingleInfo text="Gampola,Sri Lanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

