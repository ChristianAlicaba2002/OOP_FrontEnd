"use client";
import React, { useEffect, useState } from "react";
import "./LandingPageStyle/landingPage.css";
import { TProductProps } from "@/app/Types/AllTypes";
import Image from "next/image";
import Link from "next/link";


function LandingPage() {
  const [product, setProduct] = useState<TProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/products");

      if (!response.ok) {
        throw new Error(`Failed to Fetch ${response.status}`);
      }

      const data = await response.json();
      setProduct(data.data);
      console.log(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="text-white min-h-screen font-raleway overflow-x-hidden">
      <div className="flex items-center justify-start p-6">
        <div className="flex items-center">
          <img src="/img/oop_logo.png" alt="Logo" className="w-20 h-20 mr-4" />
          <span className='text-5xl lg:text-6xl font-extrabold font-["Playfair_Display"] bg-gradient-to-r from-[#F77062] to-[#FE5196] text-transparent bg-clip-text drop-shadow-pink-500'>
            MIS&SB
          </span>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-between py-24">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-center">
          <div className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#F77062] to-[#FE5196] text-transparent bg-clip-text drop-shadow-pink-500">
            Frosty Frenzy & Bliss!
          </div>
          <h2 className="text-lg text-gray-500 leading-relaxed font-serif">
            Legend whispers of a taste that rewrites happiness. They say it's the sprinkle that changes everything.
          </h2>
          <a
            href="/Application/Pages/MainPage"
            className="inline-block px-8 py-4 rounded-full text-white font-semibold text-lg 
                      bg-gradient-to-br from-[#F77062] to-[#FE5196] 
                      shadow-pink-400 shadow-md transition-all duration-300 
                      hover:from-[#FE5196] hover:to-[#F77062] 
                      hover:shadow-pink-300 hover:shadow-xl hover:scale-105"
          >
            View More
          </a>
        </div>
        <div className="w-full h-90 lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="/img/Strawberry.png"
            alt="Strawberry"
            className="w-4/5 lg:w-3/5 h-auto object-contain"
          />
        </div>
      </section>
    </div>
    
      <section className="home">
        <div className="home-left">
          <div className="slogan">Frosty Frenzy & Bliss!</div>
          <h2>
            Legend whispers of a taste that rewrites happiness. They say it's
            the sprinkle that changes everything.
          </h2>
          <a href="#flavors" className="view-more">
            View More
          </a>
        </div>
        <div className="home-right">
          <img
            src="/img/Strawberry.png"
            alt="Strawberry"
            className="strawberry-image"
          />
        </div>
      </section>

      <section className="catalogue" id="flavors">
        <h2>Our Flavors</h2>
        <div className="flavor-cards">
          {product.map((product: TProductProps) => {
            return (
              <div key={product.Itemcode} className="card">
                <Image className="img"
                  src={`http://127.0.0.1:8000/api/storage/${product.Image}`}
                  width={50}
                  height={50}
                  alt={product.Item_Name}
                />
                <h3>{product.Item_Name}</h3>
                <p>{product.Description}</p>
                <p className="price">&#8369;{product.Unit_Price}</p>
                <Link href={`/Application/Pages/ProductDetails/${product.Itemcode}`} className="view-more">View more</Link>
              </div>
             
            );
          })}
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
