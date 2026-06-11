import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
       <div className="heading">

       <h1>Best for You</h1>
       <h6>Our Beverage</h6>
       </div>
      <div className="card3">
        <div className="main3">
          <img src="src\assets\beverage-1.jpg" alt="" />
          <h1>StrowBerry </h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-2.jpg" alt="" />
          <h1>Frappe </h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-3.jpg" alt="" />
          <h1>Boba Drinks</h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-4.jpg" alt="" />
          <h1>Mojito </h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-5.jpg" alt="" />
          <h1>Slushy</h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-6.jpg" alt="" />
          <h1>Hot Chocolate </h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-7.jpg" alt="" />
          <h1>smoothie </h1>
          <h3>3 products</h3>
        </div>
        <div className="main3">
          <img src="src\assets\beverage-8.jpg" alt="" />
          <h1>coffee </h1>
          <h3>3 products</h3>
        </div>
      </div>
      <div className="btn">
        <button>View All Products</button>
      </div>
    </>
  );
}

export default Cards;
