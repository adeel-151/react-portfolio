import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "b7c38581-9e52-47dd-a110-87751434730c");
  formDataToSend.append("email", formData.email);
  formDataToSend.append("subject", formData.subject);
  formDataToSend.append("message", formData.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formDataToSend
  });

  const data = await response.json();

  if (data.success) {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } else {
    alert("Failed to send message. Try again.");
  }
};


  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      info: 'adeelkhattak223@gmail.com',
      link: 'mailto:adeelkhattak223@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      info: '+92 301 5355509',
      link: 'tel:+923015355509'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      info: 'Pakistan',
      link: '#'
    }
  ];

  return (
    <motion.section 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together to bring your ideas to life</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              Whether you have a project in mind, want to collaborate, 
              or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  className="contact-method"
                  whileHover={{ x: 10 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend className="btn-icon" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;