import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h2>Welcome to Unniverse</h2>
        <p>Building the future with modern solutions.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Unniverse is a student community platform that connects college students
          across different tiers, helping them share knowledge, find mentors,
          exchange notes, and prepare for a bright future.
        </p>
      </section>

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

      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Unniverse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
