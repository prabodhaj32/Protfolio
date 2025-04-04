import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <div>
           <h2 className="text-orange text-3xl mb-2">Get In Touch</h2>
           <p className="text-white"> Feel  free to reach out if you like to collaborate 
           you are just a few clicks away!
           </p>
        </div>
        <ContactForm/>
      
    </div>
  )
}

export default ContactMeLeft
