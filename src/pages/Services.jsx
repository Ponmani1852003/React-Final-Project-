import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>🛎 Our Services</h1>

      <img
        src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
        alt="Services"
        className="service-image"
      />

      <p>
        We provide premium restaurant
        services for all customers.
      </p>

      <div className="service-links">
        <Link to="dinein">
          🍽 Dine In
        </Link>

        <Link to="onlineorder">
          🛵 Online Order
        </Link>

        <Link to="catering">
          🎉 Catering
        </Link>
      </div>

      <div className="service-features">
        <div className="feature-card">
          Fast Service
        </div>

        <div className="feature-card">
          Fresh Ingredients
        </div>

        <div className="feature-card">
          Family Friendly
        </div>

        <div className="feature-card">
          Event Catering
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;