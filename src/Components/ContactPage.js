import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className='contact-form-div'>
        <div className="contact-info1">
          <p>If you have any questions or inquiries, feel free to get in touch with us:</p>
          <p>Email: your@email.com</p>
          <p>Phone: +123456789</p>
          <p>Address: 123 Main St, City</p>
        </div>
        <form className="contact-form">
          {/* Implement your contact form */}
          <div className='contact-item'><label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" /></div>
          <div className='contact-item'><label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" /></div>
          <div className='contact-item'><label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
