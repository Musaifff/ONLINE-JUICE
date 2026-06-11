import './Ads.css';
import React from 'react'



export default function Ads() {
  return (
    <>
    <div className='container1'>
        <h1>Our Fruitsome Blog</h1>
        <p>Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna,
vel scelerisque nisl consectetur et.</p>
         <div className="adsCards">
                   <div className="card">
                         <img src="src\assets\news-1.jpg" alt="" />
                         <button>smoothie</button>
                         <h5>Broad bean and goats’ cheese <br />bruschetta</h5>

                   </div>
                   <div className="card">
                    <img src="src\assets\news-2.jpg" alt="" />
                     <button>smoothie</button>
                         <h5>Broad bean and goats’cheese <br /> bruschetta</h5>

                   </div>
                                     <div className="card">
                    <img src="src\assets\news-3.jpg" alt="" />
                     <button>smoothie</button>
                         <h5>Broad bean and goats’ cheese <br />bruschetta</h5>

                   </div>   
         </div>

    </div>
    <div className="last-card">
         <img src="src\assets\1.jpg" alt="" />
          <img src="src\assets\2.jpg" alt="" />
           <img src="src\assets\3.jpg" alt="" />
    </div>
    </>
  )
}
 