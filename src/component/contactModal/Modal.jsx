import React, { useState } from 'react';
import styles from "./styles.module.css";
import toast from 'react-hot-toast';

const Modal = ({ handleModalclose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const childClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.kaushambiairways.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Technical error occurred. Please try again.');
      }

      toast.success('Form submitted successfully!');
      setName("");
      setEmail("");
      setMessage("");
      setIsChecked(false);
      handleModalclose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleModalclose}>
      <div className={styles.container} onClick={childClick}>
        <div className={styles.headingdiv}>
          <h4 className={styles.heading}>Get in touch</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <div className={styles.inputdiv}>
              <input 
                type="text" 
                value={name} 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)} 
                className={styles.input} 
                required 
              />
            </div>
            <div className={styles.inputdiv}>
              <input 
                type="email" 
                value={email} 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)} 
                className={styles.input} 
                required 
              />
            </div>
            <div className={styles.inputdiv}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className={styles.checkbox}
              />
              <span className={styles.checktext}>I would like to receive the newsletter.</span>
            </div>
          </div>
          <button className={styles.btn} disabled={isSubmitting}>
            <span className={styles.btntext}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;