import React from 'react'
import "./LandingPageStyle/landingPage.css"
import Link from 'next/link'

function LadingPage() {
  return (
    <div>
    <div className="navbar">
      <div className="logo">
        <img src="/img/oop_logo.png" alt="" />
      </div>
      <div className='userIcon'>
        <img src="/img/oop_usericon.png" alt="" />
      </div>
    </div>

    <div className="home">
      <div className="home-left">
        <div className="slogan">Frosty Frenzy & Bliss!</div>
          <h2>Legend whispers of a taste that rewrites happiness. They say it's the sprinkle that changes everything.</h2>
        <div className="ToMain">
          <h5>
            Can your taste buds handle this ice scramble revolution?
            <Link className="landing-link" href="/Application/Pages/MainPage">
              View More
            </Link>
          </h5>
        </div>
      </div>
      <img src="/img/Strawberry.png" alt="Home Image" />
    </div>
  </div>
);
}
export default LadingPage
