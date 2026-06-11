import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar (){
    const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    
    <>
          
     
        <header className={scroll ? "navbar active" : "navbar"} >
        {/* <div className="header"> */}
           <img src="src\assets\logo-2.png" alt="" />
          
    

  

        <ul>
        <li>  <a href="#">HOME</a> </li>
        <li> <a href="#">ABOUT</a> </li>
        <li>  <a href="#">MEMU</a> </li>
        <li> <a href="#">GALLERY</a> </li>
        <li>   <a href="#">BLOG</a> </li>
        <li><a href="#">CONTACT</a> </li>
        </ul>
        {/* </div> */}
        
    </header>
    <div className="banner">
        <div className="name">Heathly <br /> Smoothie</div>
       <div className="bgimg">
         
            <img src="src\assets\content-image-1.png" alt="" />
           </div>
    </div>
    </>
  );
};
export default Navbar;
