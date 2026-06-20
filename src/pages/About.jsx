function About() {
  return (
    <div className="page">
      <h1>About Foodies Restaurant</h1>

      <img
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
        alt="Restaurant Interior"
        className="about-image"
      />

      <div className="about-content">
        <h2>Who We Are</h2>

        <p>
          Foodies Restaurant is one of the
          leading restaurants providing
          delicious and high-quality meals
          since 2015.
        </p>

        <h2>Our Mission</h2>

        <p>
          To serve fresh, healthy, and
          tasty food while ensuring the
          best customer experience.
        </p>

        <h2>Why Choose Us?</h2>

        <div className="feature-container">
          <div className="feature-card">
            🍔 Fresh Ingredients
          </div>

          <div className="feature-card">
            👨‍🍳 Expert Chefs
          </div>

          <div className="feature-card">
            🚚 Fast Delivery
          </div>

          <div className="feature-card">
            ⭐ 5 Star Service
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;