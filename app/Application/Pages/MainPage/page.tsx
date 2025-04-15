import React from 'react';
import './MainPageStyle/MainPage.css';
import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="dashboard-container">
      <div className="background-logo">
        <img src="/img/oop_logo.png" alt="Logo" />
      </div>

      <div className="sidebar">
        <nav className="sidebar-nav">
          <a href="#home" className="nav-link">
            <img src="/img/oop_home.png" alt="Home" className="nav-icon" />
            <span className="nav-text">Home</span>
          </a>
          <a href="#statistics" className="nav-link">
            <img src="/img/oop_statistic.png" alt="Statistics" className="nav-icon" />
            <span className="nav-text">Statistics</span>
          </a>
          <a href="#location" className="nav-link">
            <img src="/img/oop_location.png" alt="Location" className="nav-icon" />
            <span className="nav-text">Location</span>
          </a>
        </nav>
        <div className="sidebar-bottom">
          <Link href="/logout" className="logout-link">
            <img src="/img/oop_logout.png" alt="logout icon" />
            <span className="nav-text">Log Out</span>
          </Link>
        </div>
      </div>

      <div className="main-content">
        <div className="user-profile">
          <img src="/img/oop_usericon.png" alt="User" className="user-icon" />
          <div className="user-options">
            <Link href="/login" className="user-option">
              Log In
            </Link>
            <Link href="/register" className="user-option">
              Register
            </Link>
          </div>
        </div>
        <h1 className="welcome-header">Welcome to MIS&SB</h1>

        <div id="home" className="page-content">
          <div className="card-container">
            <div className="small-cards">
              <div className="small-card floating-card">
                <img src="/img/Strawberry.png" alt="Item 1" className="card-image" />
                <div className="card-details">
                  <p className="card-name">Strawberry</p>
                  <p className="card-prize">$100</p>
                </div>
              </div>
              <div className="small-card floating-card">
                <img src="/img/Ube.png" alt="Item 2" className="card-image" />
                <div className="card-details">
                  <p className="card-name">Ube</p>
                  <p className="card-prize">$150</p>
                </div>
              </div>
              <div className="small-card floating-card">
                <img src="/img/Pandan.png" alt="Item 3" className="card-image" />
                <div className="card-details">
                  <p className="card-name">Pandan</p>
                  <p className="card-prize">$200</p>
                </div>
              </div>
              <div className="small-card floating-card">
                <img src="/img/Mango.png" alt="Item 4" className="card-image" />
                <div className="card-details">
                  <p className="card-name">Mango</p>
                  <p className="card-prize">$120</p>
                </div>
              </div>
              <div className="small-card floating-card">
                <img src="/img/Chocolate.png" alt="Item 5" className="card-image" />
                <div className="card-details">
                  <p className="card-name">Chocolate</p>
                  <p className="card-prize">$180</p>
                </div>
              </div>
            </div>
            <div className="big-card">
              <img src="/img/Drinks.png" alt="Big Item" className="card-image big-image" />
              <div className="card-details"></div>
            </div>
          </div>
        </div>

        <div id="statistics" className="page-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, adipisci necessitatibus fugiat rem distinctio enim! Vitae doloribus reiciendis, nulla vero natus, ut velit doloremque voluptates nisi quos assumenda cupiditate laudantium?</p>
        </div>

        <div id="location" className="page-content"></div>
      </div>
    </div>
  );
};

export default MainPage;