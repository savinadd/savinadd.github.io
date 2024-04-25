import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        setStateMessage('Message sent succesfully!');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); 
      },
      (error) => {
        setStateMessage('Something went wrong, please try again later');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); 
      }
    );

    e.target.reset();
  };
      return (
        <section id='contact'>
        <div className="contact-form-container">
          <div className="contact-box">
            <div className="contact-form-content">
              <div className="header"><h2>Contact me here!</h2></div>
              <form onSubmit={sendEmail} className="form-container">
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your name" className="input-style" />
                </div>
                <div className="input-container">
                  <label htmlFor="user_email">Email</label>
                  <input type="email" id="user_email" name="user_email" required placeholder="Enter your email" className="input-style" />
                </div>
                <div className="input-container">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Enter your message" className="input-style" />
                </div>
                <button type="submit" disabled={isSubmitting} className="button-style">
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {stateMessage && <p className="message">{stateMessage}</p>}
              </form>
            </div>
          </div>
        </div>
        </section>
      );
    }
    
    export default ContactForm;


