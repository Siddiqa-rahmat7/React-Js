import React from "react";
import ReactDOM from "react-dom/client";

/* 
* Header
- logo
- nav items
* Body
- search
- resturant container
- resturant card
- img
- Name of res , Star Rating
* Footer
- copyright
- links
- address
- contact 
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" scr="https://pngtree.com/so/food-logo" />
            </div>
            <div className="nav-item">
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

const ResturantCard = () => {
    return (
        <div className="resturant-card">
            <h3>Hotel Vedic Inn</h3>
            <h4>Briyani, North Indian, South Indian </h4>
            <h4>4.4 stars</h4>
            <h4>32 min</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resturant-container">
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);