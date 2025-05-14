import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to CarRental</h1>
        <p>Your trusted partner for reliable and affordable car rentals.</p>
      </section>

      <section className="features">
        <h2>Wide Range of Cars</h2>
        <p>
          From economy to luxury, we offer vehicles to suit every journey and every budget.
        </p>
      </section>

      <section className="services">
        <h2>24/7 Customer Support</h2>
        <p>
          Whether it’s a road trip or a business trip, we are here to support you anytime, anywhere.
        </p>
      </section>
    </div>
  );
};

export default Home;
