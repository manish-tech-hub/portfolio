import React,{useState} from "react";
import "../css/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef()
  const [statusMessage, setStatusMessege]=useState("")
  const sendMail=(e)=>{
    e.preventDefault()
    emailjs.sendForm(
      "service_928kt7e",
      "template_4gn55jk",
      form.current,
      "wMwmmID-TG9XUftRk"
    ).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessege("✅Message sent successfully!");
          form.current.reset();
          setTimeout(()=>setStatusMessege(""),1000)
        },
        (error) => {
          setStatusMessege(" ❌ Failed to send message.");
          setTimeout(()=>setStatusMessege(""),3000)
          console.log(error)
        }
      );
  }
  return (
    <section id="contact" className="contact-section">
        <h2>Get In Touch</h2>
      <div className="contact-container">
        {/* Left side: Envelope + letter icon */}
        <div className="contact-icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Envelope body */}
            <rect x="8" y="20" width="48" height="36" rx="6" fill="var(--heading-color)" />
            {/* Envelope flap */}
            <polygon points="8,20 32,38 56,20" fill="#1e1e1e" />
            {/* Letter coming out */}
            <rect
              x="16"
              y="8"
              width="32"
              height="24"
              fill="var(--color-bg)"
              stroke="var(--heading-color)"
              strokeWidth="2"
              rx="3"
            />
            {/* Lines on letter */}
            <line
              x1="20"
              y1="16"
              x2="44"
              y2="16"
              stroke="var(--heading-color)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="20"
              y1="22"
              x2="38"
              y2="22"
              stroke="var(--heading-color)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right side: Contact form */}
        <form ref={form} onSubmit={sendMail}
          className="contact-form"
        >
          {statusMessage && <p className="form-status">{statusMessage}</p>}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="client_name" required placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="client_email"
            required
            placeholder="Your Email"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
