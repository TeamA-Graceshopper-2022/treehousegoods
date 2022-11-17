import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
        {/**
      <div className="landingImageBlock">
        <img
          id="landingPageImage"
          src="https://cdn.shopify.com/s/files/1/0553/0461/8173/products/junzo-red-clay-tokoname-japanese-teapot-set-88oz260ml-sasame-and-ceramesh-musubi-kiln-handmade-japanese-tableware-and-japanese-dinnerware-836048_1000x.jpg?v=1654483376"
        />
      </div>
 */}
      <section id="carousel">
      <div id="carousel-text">
        <h1>Welcome to TreeHouse Goods</h1>
        <h2>Shop Button?</h2>
      </div>
      <img class="carousel-image" src="https://www.farmersalmanac.com/wp-content/uploads/2017/02/Breakfast-In-Bed-Coffee-Flowers-as_283245010.jpeg" />
    </section>
      

        <div className="categoryButtons">
          <Link to="/products/cat/plant">
            <div className="categoryBut">
              <div>Plants</div>
            </div>
          </Link>
          <Link to="/products/cat/tea">
            <div className="categoryBut">
              <div>Tea</div>
            </div>
          </Link>
          <Link to="/products/cat/coffee">
            <div className="categoryBut">
              <div>Coffee</div>
            </div>
          </Link>
          <Link to="/products/cat/homegood">
            <div className="categoryBut">
              <div>Houseware</div>
            </div>
          </Link>
        </div>
      </div>
    
  );
};

export default LandingPage;
