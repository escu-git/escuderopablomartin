import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" name="name" />
        
        <label>Email:</label>
        <input type="email" name="email" />
        
        <label>Mensaje:</label>
        <textarea name="message"></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
