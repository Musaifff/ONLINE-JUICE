import React from "react";
import "./Center.css";

function Center() {
  return (
    <>
      <div className="center-container">
        <div className="circle circle3"></div>
        <div className="circle circle2"></div>
        <div className="circle circle1"></div>

        <div className="bottle">
          <img src="src\assets\recipe.png" alt="" />
        </div>

        <div class="item left-top">
          <div className="icon">
            <img src="src\assets\recipe-1.png" alt="" />
          </div>
          <h3>Cucumber</h3>
        </div>

        <div className="item right-top">
          <div className="icon">
            <img src="src\assets\recipe-2.png" alt="" />
          </div>
          <h3>Lemon</h3>
        </div>

        <div className="item left-bottom">
          <div className="icon">
            <img src="src\assets\recipe-3.png" alt="" />
          </div>
          <h3>Apple</h3>
        </div>

        <div className="item right-bottom">
          <div className="icon">
            <img src="src\assets\recipe-4.png" alt="" />
          </div>
          <h3>Fresh Water</h3>
        </div>
      </div>
 <div className="buttom">
        <div className="buttom-heading">
          <h1>Upcoming Our Beverage</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>All Product </button>
        </div>
        <div className="buttom-img">
            <img src="src\assets\image-1.jpg" alt="" />
        </div>
      </div> 
    </>
  );
}
export default Center;
