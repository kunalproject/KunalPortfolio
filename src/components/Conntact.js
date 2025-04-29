import React, { useState } from 'react'
import './Contact.css'
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
const Conntact = () => {
 const [formData, setFormData] = useState({
    name: "",
    mail: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // To track submission status
    const location = useLocation();
  const params = location.pathname.split("/");
  const username = params[params.length - 1];

  /**
   * Handles form input changes by updating the formData state.
   * @param {React.FormEvent<HTMLInputElement>} e - The form event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // Replace with your API endpoint
      const response = await fetch(`${process.env.REACT_APP_SEND_MSG}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", mail: "", msg: "" }); 
        toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
      } else {
        toast.error("Failed to send message. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
        setSubmitStatus("error");
      }
    } catch (error) {
        toast.error("Failed to send message. Please try again.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p>Scrolled till here! Well stop overthinking and contact me.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "SEND!"}
        </button>
      </form>
      {submitStatus === "success" && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="error-message">Failed to send message. Please try again.</p>
      )}
    </div>
  );
};
export default Conntact
