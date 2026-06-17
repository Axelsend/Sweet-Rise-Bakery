import React, { useState } from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

const menuData = {
  breads: [
    {
      name: "Classic Sourdough Loaf",
      description: "Slow-fermented 24 hours for a deep, tangy flavor. Crispy crust, chewy open crumb.",
      price: "$9.00",
    },
    {
      name: "Honey Wheat Loaf",
      description: "Soft and slightly sweet with local Ohio honey baked right in.",
      price: "$8.00",
    },
    {
      name: "Rustic White Loaf",
      description: "A simple, classic white bread. Soft inside with a golden crust.",
      price: "$7.00",
    },
    {
      name: "Seeded Rye Loaf",
      description: "Hearty rye with a blend of caraway and sunflower seeds throughout.",
      price: "$9.50",
    },
  ],
  rolls: [
    {
      name: "Honey Wheat Dinner Rolls",
      description: "Pillowy soft rolls with a touch of honey. Perfect for any dinner table. Sold by the half dozen.",
      price: "$7.00",
    },
    {
      name: "Sourdough Rolls",
      description: "All the flavor of our sourdough loaf in a perfectly portioned roll. Sold by the half dozen.",
      price: "$8.00",
    },
    {
      name: "Garlic Herb Rolls",
      description: "Buttery rolls brushed with roasted garlic and fresh herbs. Sold by the half dozen.",
      price: "$8.50",
    },
    {
      name: "Pretzel Rolls",
      description: "Chewy, dark-crusted pretzel rolls with a sprinkle of coarse salt. Sold by the half dozen.",
      price: "$9.00",
    },
  ],
  pastries: [
    {
      name: "Butter Croissant",
      description: "Laminated dough folded 27 times for a perfectly flaky, golden croissant.",
      price: "$4.50",
    },
    {
      name: "Almond Croissant",
      description: "Our classic croissant filled with almond cream and topped with sliced almonds.",
      price: "$5.50",
    },
    {
      name: "Cherry Danish",
      description: "Buttery pastry dough with sweet cherry filling and a vanilla glaze drizzle.",
      price: "$4.50",
    },
    {
      name: "Cheese Danish",
      description: "Flaky pastry filled with sweetened cream cheese and a hint of lemon zest.",
      price: "$4.50",
    },
    {
      name: "Cinnamon Morning Bun",
      description: "A spiraled pastry rolled in cinnamon sugar and orange zest. Served warm.",
      price: "$4.00",
    },
    {
      name: "Pain au Chocolat",
      description: "Two dark chocolate batons wrapped in buttery croissant dough. A Sweet Rise favorite.",
      price: "$5.00",
    },
  ],
  custom: [
    {
      name: "Custom Bread Order",
      description: "Need a specific loaf for a special occasion? We take custom bread orders with 48 hours notice.",
      price: "Starting at $12.00",
    },
    {
      name: "Custom Roll Order",
      description: "Bulk roll orders for weddings, events, and gatherings. Minimum one dozen.",
      price: "Starting at $14.00",
    },
    {
      name: "Custom Pastry Box",
      description: "Build your own box of pastries for events, meetings, or gifting. Minimum 6 items.",
      price: "Starting at $24.00",
    },
  ],
};

const categories = [
  { key: "breads", label: "🍞 Breads" },
  { key: "rolls", label: "🥖 Rolls" },
  { key: "pastries", label: "🥐 Pastries" },
  { key: "custom", label: "🎂 Custom Orders" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("breads");

  return (
    <div className="menu">

      {/* ── HERO ── */}
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <p>
          Everything is baked fresh daily. We sell out fast — stop in early
          or place a custom order to guarantee your favorites.
        </p>
      </section>

      {/* ── CATEGORY TABS ── */}
      <section className="menu-body">
        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`tab-btn ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── MENU ITEMS ── */}
        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="menu-item-price">
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOURS & NOTE ── */}
      <section className="menu-hours">
        <div className="hours-card">
          <h2>🕕 Bakery Hours</h2>
          <ul>
            <li><span>Monday – Friday</span><span>7:00am – 6:00pm</span></li>
            <li><span>Saturday</span><span>7:00am – 4:00pm</span></li>
            <li><span>Sunday</span><span>7:00am – 4:00pm</span></li>
          </ul>
          <p className="hours-note">
            We bake fresh every morning and often sell out of popular items by
            early afternoon. Come early or place a custom order!
          </p>
        </div>
        <div className="order-card">
          <h2>📦 Custom Orders</h2>
          <p>
            Planning an event, wedding, or special occasion? We love custom
            orders. Give us 48 hours notice and we'll take care of the rest.
          </p>
          <Link to="/contact">
            <button className="btn primary">Place a Custom Order</button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Menu;