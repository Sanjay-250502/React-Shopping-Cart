import React, { useState } from "react";
import Productcard from "./Productcard";
import "./App.css";

function App() {
  const data = [
    {
      productImage:
        "https://images.fonearena.com/blog/wp-content/uploads/2023/09/iPhone-15-Pro-and-15-Pro-Max-1024x593.jpg",
      productName: "Apple iphone 15 pro max",
      productPrice: "999 - $1199",
    },
    {
      productImage:
        "https://www.thestreet.com/.image/t_share/MTkwODg5Mzk3NjExMzQxNDk0/1-apple-macbook-air-m2-review.jpg",
      productName: "Laptops",
      productPrice: "$500.00",
    },
    {
      productImage:
        "https://i.ytimg.com/vi/66qyRD-4u50/maxresdefault.jpg",
      productName: "Television",
      productPrice: "75.00- 85.00",
    },
    {
      productImage:
        "https://cdn1.ethoswatches.com/media/catalog/product/cache/5b6ffe97254a86fab5749cb594365e70/j/a/jacob-co-astronomia-solar-zodiac-as310-40-sp-zk-a.jpg",
      productName: "Watches",
      productPrice: "$100000.00 - $200000.00",
    },
    {
      productImage:
        "https://img.freepik.com/free-photo/men-s-formal-wear-collection_53876-16559.jpg?size=626&ext=jpg&ga=GA1.1.593219929.1699108181&semt=sph",
      productName: "Shirts",
      productPrice: "500.00 - 1000.00",
    },
    {
      productImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_7Jl5G3RlPW_ciR0TudmLwLBAAfwxwN62w&usqp=CAU",
      productName: "Crocs",
      productPrice: "130.00 - 185.00",
    },
    {
      productImage:
        "https://www.raymondcustomtailor.com/uploaded-files/thumb-cache/member_45/thumb---raymond-blazer_1807.jpg",
      productName: "Branded Blazer",
      productPrice: "$600.00 - 800.00",
    },
    {
      productImage:
        "https://imgeng.jagran.com/images/2023/aug/theregisti-HSXIp58yPyI-unsplash1692004685106.jpg",
      productName: "Cameras",
      productPrice: "19.00",
    },
  ];
  const [product] = useState(data);
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => {
    setCartCount(cartCount + 1);
  };

  const decreaseCount = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  All Products
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Popular Items
                </a>
                <a className="dropdown-item" href="#">
                  New Arrivals
                </a>
              </div>
            </li>
          </ul>
          <div className="cart-comp">
            <h2>Cart {cartCount}</h2>
          </div>
        </div>
      </nav>
      <div className="title">
        <a>Shop In Style</a>
      </div>
      <div className="cart-area">
        {product.map((product, index) => (
          <Productcard
            key={index}
            index={index}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ))}
      </div>
      <div className="footer">
        <h6>Copyright © Your Website 2023</h6>
      </div>
    </div>
  );
}

export default App;
