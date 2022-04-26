import React, { useRef, useState, useContext } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contacts = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s6321vo",
        "template_cyu31lv",
        form.current,
        "8qesjOw5E3kCqqtSE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(!done);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="text"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contact us ..."}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
export default Contacts;
