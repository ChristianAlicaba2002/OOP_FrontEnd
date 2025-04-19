'use client';

import React , {useEffect , useState} from 'react';
import './MainPageStyle/MainPage.css';
import Link from 'next/link';
import Sidebar from '@/app/Application/Components/Sidebar';
import Image from 'next/image';

const products = [
  {
    name: 'Strawberry Scramble',
    price: '₱35.00',
    image: '/img/Strawberry.png',
  },
  {
    name: 'Choco Scramble',
    price: '₱40.00',
    image: '/img/Chocolate.png',
  },
  {
    name: 'Oreo Graham Bar',
    price: '₱60.00',
    image: '/img/OreoGrahamBar.png',
  },
];



type Items = {
  id: number;
  title: string;
  Description: string;
  Sizez:{ 
    size: string,
    price: number
  }
  setting:{
    setting: string;
    price: number
  }
  image: string;
}




const MainPage = () => {

  return (
    <>
      <Sidebar />
      <div className="ml-20 md:ml-64 p-6 min-h-screen font-['Playfair_Display'] transition-all duration-500">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#F77062] to-[#FE5196] bg-clip-text text-transparent mb-10 mt-4">
          Welcome to MIS&SB
        </h1>
    <div className="dashboard-container">
      <div className="background-logo">
        <img src="/img/oop_logo.png" alt="Logo" />
      </div>

      <div className="sidebar">
        <nav className="sidebar-nav">
          <Link href="/Application/Layouts" className="nav-link">
            <img src="/img/oop_home.png" alt="Home" className="nav-icon" />
            <span className="nav-text">Home</span>
          </Link>
          <Link href="#statistics" className="nav-link">
            <img src="/img/oop_statistic.png" alt="Statistics" className="nav-icon" />
            <span className="nav-text">Statistics</span>
          </Link>
          <Link href="#location" className="nav-link">
            <img src="/img/oop_location.png" alt="Location" className="nav-icon" />
            <span className="nav-text">Location</span>
          </Link>
        </nav>
        <div className="sidebar-bottom">
          <button type='submit' className="logout-link cursor-pointer">
            <img src="/img/oop_logout.png" alt="logout icon" />
          </button>
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

        <section className="mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#F77062] mb-6">
            People's Top Favorite ⋆｡‧˚❆☃️❆˚‧｡⋆
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
            {products.map((product, index) => (
              <div
                key={index}
                className=" bg-gradient-to-br from-[#FFF0E6] to-[#FFF3F5] shadow-pink-200 rounded-3xl shadow-md hover:shadow-pink-400 transition duration-300 p-4 text-center hover:scale-105"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={100}
                  className="rounded-2xl mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-[#FE5196]">{product.name}</h3>
                <p className="text-lg font-bold text-gray-500">{product.price}</p>
              </div>
            ))}
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
        </section>
      </div>
    </>
  );
};

export default MainPage;
