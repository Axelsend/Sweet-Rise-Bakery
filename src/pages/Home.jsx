import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import bakery from "../assets/Bakery.jpg";
import croissant from "../assets/Croissant.jpg";
import sourdough from "../assets/Sourdough.jpg";
import honeyroll from "../assets/Honey-Wheat.jpg";
import danish from "../assets/Cherry-Danish.jpg";
import neighborhood from "../assets/Neighborhood.jpg"

const featured = [
  {
    emoji: "🥐",
    image: croissant,
    name: "Butter Croissant",
    description:
      "Flaky, golden, and buttery through every layer. A Sweet Rise classic.",
  },
  {
    emoji: "🍞",
    image: sourdough,
    name: "Sourdough Loaf",
    description:
      "Slow-fermented for 24 hours. Crispy crust, chewy crumb, rich flavor.",
  },
  {
    emoji: "🥖",
    image: honeyroll,
    name: "Honey Wheat Roll",
    description:
      "Soft, pillowy rolls with a touch of local honey. Perfect for any table.",
  },
  {
    emoji: "🥨",
    image: danish,
    name: "Cherry Danish",
    description:
      "Buttery pastry dough folded around sweet cherry filling and vanilla glaze.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Baked with Love.
            <br />
            Risen to Perfection.
          </h1>
          <p>
            Fresh breads, flaky croissants, warm danishes, and handcrafted
            sourdough — made every morning in the heart of Toledo, OH.
          </p>
          <div className="hero-buttons">
            <Link to="/menu">
              <button className="btn primary">See Our Menu</button>
            </Link>
            <Link to="/contact">
              <button className="btn secondary">Order Now</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={bakery} alt="Fresh baked bread at Sweet Rise Bakery" />
        </div>
      </section>

      {/* ── FEATURED ITEMS ── */}
      <section className="featured">
        <h2 className="section-title">Fresh From the Oven</h2>
        <p className="section-subtitle">
          A few of our most loved bakes, made fresh every morning.
        </p>
        <div className="featured-grid">
          {featured.map((item, index) => (
            <div className="featured-card" key={index}>
              <img src={item.image} alt={item.name} className="featured-img" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <Link to="/menu">
          <button className="btn primary centered">View Full Menu</button>
        </Link>
      </section>

      {/* ── WHY SWEET RISE ── */}
      <section className="why-us">
        <div className="why-us-text">
          <h2>Toledo's Neighborhood Bakery</h2>
          <p>
            Sweet Rise Bakery has been waking up Toledo one loaf at a time.
            Everything we make is baked fresh daily — no preservatives, no
            shortcuts, no day-old bread. Just honest baking done right.
          </p>
          <ul className="why-list">
            <li>🌾 Locally sourced ingredients whenever possible</li>
            <li>🕕 Fresh baked every morning by 6am</li>
            <li>❤️ Family owned and community focused</li>
            <li>🎂 Custom orders welcome</li>
          </ul>
          <Link to="/about">
            <button className="btn primary">Our Story</button>
          </Link>
        </div>
        <div className="why-us-image">
          <img src={neighborhood} alt="image of inside of sweet rise bakery" />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <h2 className="section-title">What Toledo is Saying</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "The sourdough here is the best I've had outside of San Francisco.
              I stop in every Saturday morning."
            </p>
            <span>— Sarah M., Toledo</span>
          </div>
          <div className="testimonial-card">
            <p>
              "We ordered custom rolls for our wedding dinner and they were
              absolutely perfect. Sweet Rise went above and beyond."
            </p>
            <span>— James & Kira T., Toledo</span>
          </div>
          <div className="testimonial-card">
            <p>
              "The croissants are incredible. Perfectly flaky and never greasy.
              This place is a hidden gem."
            </p>
            <span>— Mark D., Toledo</span>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="home-cta-strip">
        <h2>Ready for Something Fresh?</h2>
        <p>
          Stop in, place an order, or just say hello. We'd love to meet you.
        </p>
        <Link to="/contact">
          <button className="btn primary">Find Us in Toledo</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
