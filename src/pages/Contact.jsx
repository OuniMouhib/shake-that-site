import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import message from "../assets/4.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending in progress....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9f2d4dfd-ffc8-4e83-8047-335fe67a48bf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();

      if (res.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", res);
        setResult(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
  className="container"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
    
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="contact-col"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={message} alt="Contact us" />
      </motion.div>

      <motion.div
        className="contact-col"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <form onSubmit={onSubmit}>
          <label>NAME</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
          <label>PHONE NUMBER</label>
          <input
            type="text"
            name="TEL"
            placeholder=""
            required
          />
          <label>WRITE YOUR MESSAGE HERE</label>
          <textarea
            name=""
            rows="6"
            placeholder=""
            required
          ></textarea>
          <button type="submit" className="btn_3">
          send now
          </button>
        </form>
        {result && <span className="result-message">{result}</span>}
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Contact;
