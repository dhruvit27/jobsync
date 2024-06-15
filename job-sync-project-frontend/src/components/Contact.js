import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container  bg-white rounded shadow-lg">
      <h1 className="mb-4 text-center">Talk with our team</h1>
      <p className="mb-4 text-center">
        If you have any questions, please feel free to reach out to us. We'd love to hear from you!
      </p>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control mb-4"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
