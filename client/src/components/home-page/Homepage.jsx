import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h2>Welcome to MyBrand</h2>
        <p>Building the future with modern solutions.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Fast & Optimized</h3>
          <p>Experience lightning-fast performance.</p>
        </div>
        <div className="feature-card">
          <h3>Responsive Design</h3>
          <p>Looks great on any device.</p>
        </div>
        <div className="feature-card">
          <h3>Easy to Use</h3>
          <p>Intuitive and user-friendly interface.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
