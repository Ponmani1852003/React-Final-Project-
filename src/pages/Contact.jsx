function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Contact"
        className="contact-image"
      />

      <div className="contact-cards">
        <div className="contact-card">
          <h3>📍 Address</h3>

          <p>
            123 Food Street,
            Tirupur, Tamil Nadu
          </p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>

          <p>
            +91 9876543210
          </p>
        </div>

        <div className="contact-card">
          <h3>✉ Email</h3>

          <p>
            foodies@gmail.com
          </p>
        </div>

        <div className="contact-card">
          <h3>⏰ Opening Hours</h3>

          <p>
            9:00 AM - 11:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;