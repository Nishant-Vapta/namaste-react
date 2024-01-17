import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo"
               src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

const RestaurantCard = () => {
   return(
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
         <img
            className="res-logo"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hambixuqvgnihazifudv"
         />
         <h3>Nishant Momos Hub</h3>
         <h4>Momoms, Asian, Meggie</h4>
         <h4>4.4</h4>
         <h4>28 mins</h4>
      </div>
   );
}
const Body = () => {
  return( 
      <div className="body">
         <div className="search">
            <input placeHolder="Serach food"></input>
            <button>Serach</button>
         </div>
         <div className="res-conatiner">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
         </div>
      </div>

  );
};


const AppLayout  = () => {
   return(
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);