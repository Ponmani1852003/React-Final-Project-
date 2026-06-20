function Home() {
  return (
    <div className="page">
      <h1>🍽️ Welcome to Foodies Restaurant</h1>

      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        alt="Restaurant"
        className="home-image"
      />

      <p>
        Experience the perfect blend of
        taste, quality, and hospitality.
        We serve freshly prepared meals
        made with premium ingredients.
      </p>

      <h2>🔥 Today's Special Offers</h2>

      <div className="offer-container">
        <div className="offer-card">
          🍕 20% Off on Pizza
        </div>

        <div className="offer-card">
          🍔 Buy 1 Get 1 Burger
        </div>

        <div className="offer-card">
          🥤 Free Soft Drink Above ₹500
        </div>
      </div>

      <h2>⭐ Customer Reviews</h2>

      <div className="review-container">
        <div className="review-card">
          "Amazing food and service!"
          <br />
          - Arun
        </div>

        <div className="review-card">
          "Best restaurant in town."
          <br />
          - Priya
        </div>

        <div className="review-card">
          "Loved the pizza and desserts."
          <br />
          - Karthik
        </div>
      </div>
    </div>
  );
}

export default Home;