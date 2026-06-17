import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
import baker from "../assets/Female-Baker.jpg";
import maria from "../assets/Maria.jpg";
import james from "../assets/James.jpg";
import rosa from "../assets/Rosa.jpg";

const About = () => {
  return (
    <div className="about">
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>Our Story</h1>
          <p>
            Sweet Rise Bakery was born from a simple belief — that great bread
            has the power to bring people together. We've been baking for
            Toledo, one loaf at a time, ever since.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="about-story">
        <div className="about-story-text">
          <h2>How It All Started</h2>
          <p>
            Sweet Rise started in a home kitchen on Toledo's west side, where
            founder Maria Calloway spent her weekends perfecting her
            grandmother's sourdough recipe. What began as weekend loaves for
            neighbors quickly turned into something bigger — a community
            gathering around fresh bread.
          </p>
          <p>
            In 2018, Maria opened the doors to the first Sweet Rise Bakery
            location on Main Street. The lineup was simple: sourdough, honey
            wheat, and a handful of pastries. Within six months, the morning
            line stretched out the door.
          </p>
          <p>
            Today Sweet Rise is still family owned, still baking from scratch
            every single morning, and still using Maria's original sourdough
            starter — now lovingly nicknamed "Old Gerald."
          </p>
        </div>
        <div className="about-story-image">
          <img src={baker} alt="female baker standing over table" />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values">
        <h2 className="section-title">What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">🌾</span>
            <h3>Local First</h3>
            <p>
              We source our flour, honey, and dairy from Ohio farms whenever
              possible. Good bread starts with good ingredients.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">⏰</span>
            <h3>Fresh Every Day</h3>
            <p>
              We bake every morning, full stop. Nothing sits overnight. If we
              sell out, we sell out — that's how you know it's fresh.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>Community Rooted</h3>
            <p>
              Sweet Rise donates unsold bread to Toledo Area Foodbank every
              evening. Good food shouldn't go to waste.
            </p>
          </div>
          <div className="value-card">
            <span className="value-icon">❤️</span>
            <h3>Made with Care</h3>
            <p>
              No shortcuts, no preservatives, no compromises. Every loaf gets
              the same attention as the first one Maria ever baked.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-team">
        <h2 className="section-title">The People Behind the Bread</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={maria} alt="Maria Calloway" className="team-photo" />
            <h3>Maria Calloway</h3>
            <span className="team-role">Founder & Head Baker</span>
            <p>
              Maria has been baking since she was eight years old. She still
              opens the bakery every morning at 4am.
            </p>
          </div>
          <div className="team-card">
            <img src={james} alt="James Calloway" className="team-photo" />
            <h3>James Calloway</h3>
            <span className="team-role">Operations & Custom Orders</span>
            <p>
              Maria's husband and business partner. James handles everything
              from custom orders to keeping the ovens running.
            </p>
          </div>
          <div className="team-card">
            <img src={rosa} alt="Rosa Mendez" className="team-photo" />
            <h3>Rosa Mendez</h3>
            <span className="team-role">Pastry Specialist</span>
            <p>
              Rosa joined Sweet Rise in 2020 and brought her passion for French
              pastry technique with her. The croissants are her masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <h2>Come Say Hello</h2>
        <p>
          We're at 123 Main Street in Toledo, open seven days a week. We'd love
          to meet you.
        </p>
        <div className="about-cta-buttons">
          <Link to="/menu">
            <button className="btn primary">See Our Menu</button>
          </Link>
          <Link to="/contact">
            <button className="btn secondary">Get In Touch</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
