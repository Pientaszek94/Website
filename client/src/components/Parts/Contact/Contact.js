import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qy5sh3e', 'template_hbm1kyd', form.current, 'r4TyEcwLicH-kPcPe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h5>Name</h5>
      <input type="text" name="name" />
      <h5>Email</h5>
      <input type="email" name="email" />
      <h5>Subject</h5>
      <textarea name="subject" />
      <h5>Message</h5>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};