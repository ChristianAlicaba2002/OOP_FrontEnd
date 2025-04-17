"use client";
import React, { useEffect, useState } from "react";
import "./LandingPageStyle/landingPage.css";
import { TProductProps } from "@/app/Types/AllTypes";
import Image from "next/image";

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
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/img/oop_logo.png" alt="Logo" />
        </div>
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
