import React from 'react';
import "./LandingPageStyle/landingPage.css";

function LandingPage() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/img/oop_logo.png" alt="Logo" />
        </div>
      </div>

      <section className="home">
        <div className="home-left">
          <div className="slogan">Frosty Frenzy & Bliss!</div>
          <h2>Legend whispers of a taste that rewrites happiness. They say it's the sprinkle that changes everything.</h2>
          <a href="#flavors" className="view-more">View More</a>
        </div>
        <div className="home-right">
          <img src="/img/Strawberry.png" alt="Strawberry" className="strawberry-image" />
        </div>
      </section>

      <section className="catalogue" id="flavors">
        <h2>Our Flavors</h2>
        <div className="flavor-cards">
          <div className="card">
            <img src="/img/Strawberry.png" alt="Strawberry" />
            <h3>Strawberry</h3>
            <p>Sweet and tangy strawberry flavor.</p>
            <p className="price">P49.00</p>
          </div>
          <div className="card">
            <img src="/img/Ube.png" alt="Ube" />
            <h3>Ube</h3>
            <p>Delicious purple yam flavor.</p>
            <p className="price">P49.00</p>
          </div>
          <div className="card">
            <img src="/img/Pandan.png" alt="Pandan" />
            <h3>Pandan</h3>
            <p>Aromatic and sweet pandan flavor.</p>
            <p className="price">P49.00</p>
          </div>
          <div className="card">
            <img src="/img/Chocolate.png" alt="Chocolate" />
            <h3>Chocolate</h3>
            <p>Rich and creamy chocolate flavor.</p>
            <p className="price">P49.00</p>
          </div>
          <div className="card">
            <img src="/img/Mango.png" alt="Mango" />
            <h3>Mango</h3>
            <p>Fresh and tropical mango flavor.</p>
            <p className="price">P49.00</p>
          </div>
        </div>
      </section>
{/* 
      <section className="about">
        <h2>About Us</h2>
        <p>We are dedicated to bringing you the most delightful flavors that bring joy and happiness. Our mission is to create unforgettable experiences with every scoop!</p>
      </section> */}
    </>
  );
}

export default LandingPage;