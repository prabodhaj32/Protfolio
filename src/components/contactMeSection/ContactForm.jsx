import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6gxxudd", "template_ld540zj", form.current, {
        publicKey: "ZYoimIBH4jnsJ78Gm",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan text-sm mb-2">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex  w-1000px flex-col gap-3 max-w-x3">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-9 rounded-md bg-white px-3 text-sm"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-9 rounded-md bg-white px-3 text-sm"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="5" // Reduced from 9 to 5
          placeholder="Message"
          required
          className="rounded-md bg-white p-3 text-sm"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-md border border-cyan text-white h-9 font-bold text-base hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;