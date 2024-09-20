import React, { useState } from 'react';
import '../../styles/contact.css';
import { useToast } from '../../Context/ToastContext';

const ContactForm = () => {
  const toast = useToast();
  const INITIAL_VALUE = {
    name: '',
    email: '',
    message: '',
  };
  const [formData, setFormData] = useState(INITIAL_VALUE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.showToast(`¡Gracias ${formData.name}, tu mail fue enviado✔️!`);
    setFormData(INITIAL_VALUE);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
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
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
