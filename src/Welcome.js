import React, { useState, useEffect } from "react";
import Navigation1 from "./Navigation1";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Welcome.css";

function Welcome() {
  const [products, setProducts] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 4))) // Limit to 4 products
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="home-page">
      <Navigation1 />
      <div className="back-box"></div>
      <div className="home-body">
        <div className="home-left">
            <div className="title">
            <h1>Find Clothes That Matches Your Style</h1>
            </div>
            <div className="para">
                <p>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
                </p>
            </div>
            <div style={{ marginTop: "10px" }}>
                <Link
                to="/products"
                className="explore-now-btn"
                >
                Shop Now
                </Link>
            </div>

            {/* Added International Brands Section */}
            <div className="brand-stats">
                <div className="stat">
                <h2>200+</h2>
                <p>International Brands</p>
                </div>
                <div className="vertical-line"></div>
                <div className="stat">
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
                </div>
                <div className="vertical-line"></div>
                <div className="stat">
                <h2>30,000+</h2>
                <p>Happy Customers</p>
                </div>
            </div>
            </div>
            <div className="home-right">
            <div className="background-img"></div>
            <div className="image">
                <img
                src="https://t3.ftcdn.net/jpg/02/89/88/94/360_F_289889453_guDc5hrax0yi4kOBIeNSSrxiWpoNRtXx.webp"
                alt="Fashion Banner"
                />
            </div>
            </div>
        </div>

        <div className="section1">
            <h1 className="fir">VERSACE</h1>
            <h1 className="sec">ZARA</h1>
            <h1 className="thi">GUCCI</h1>
            <h1 className="fou">PRADA</h1>
            <h1 className="fif">Calvin Klein</h1>
        </div>

        {/* New Arrivals Section */}
        <div className="section2">
            <h1>NEW ARRIVALS</h1>
            <div className="new-arrivals-con">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                </div>
            ))}
            </div>
            <div className="view-all-btn-container">
            <Link
                to="/products"
                className="view-all-btn">
                View All
            </Link>
            <hr style={{ marginTop: "50px" }} />
            </div>
        </div>
        {/* Browse by Dress Style Section */}
        <div className="browse">
            <div className="browse-con">
                <h1 className="browse-title">BROWSE BY DRESS STYLE</h1>
                    <div className="browse-grid">
                    <div className="browse-item-small">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWsyXMwry9cenFSD-GmINUcd8RD_xcrCU4A&s"
                        alt="Casual"
                        className="browse-image"
                        /> 
                        <h3 className="browse-heading">Casual</h3>
                    </div>
                    <div className="browse-item-large">
                        <img
                        src="https://media.6media.me/media/catalog/product/n/4/n48731539v_3.jpg"
                        alt="Formal"
                        className="browse-image"
                        />
                        <h3 className="browse-heading">Formal</h3>
                    </div>
                    <div className="browse-item-large">
                        <img
                        src="https://m.media-amazon.com/images/I/61DPykLK1oL._AC_UY1100_.jpg"
                        alt="Party"
                        className="browse-image"
                        />
                        <h3 className="browse-heading">Party</h3>
                    </div>
                    <div className="browse-item-small">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrQSSDMmI7qH0tWGDoxBoxbXWbYWrXoRfHA&s"
                        alt="Gym"
                        className="browse-image"
                        />
                        <h3 className="browse-heading">Gym</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
        <div className="newsletter-section">
            <h2>Stay Up to Date About Our<br/> Latest Offers</h2>
            <div className="newsletter-subscription">
            <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe to Newsletter</button>
            </div>
        </div>
        <div className="footer-content">
            <div className="footer-column">
            <h3>Ecora</h3>
            <p>
                We have clothes that suit your style and which you're proud to wear.
                From women to men.
            </p>
            <div className="social-icons">
                <FaFacebook className="icon" /> {/* Facebook Icon */}
                <FaTwitter className="icon" />  {/* Twitter Icon */}
                <FaInstagram className="icon" /> {/* Instagram Icon */}
            </div>
            </div>
            <div className="footer-column">
            <h3>Company</h3>
            <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
            </ul>
            </div>
            <div className="footer-column">
            <h3>Help</h3>
            <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-column">
            <h3>FAQ</h3>
            <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
            </ul>
            </div>
            <div className="footer-column">
            <h3>Resources</h3>
            <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>YouTube Playlist</li>
            </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Ecora © 2000-2023, All Rights Reserved</p>
            <div className="payment-icons">
            <img src="https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png" alt="Visa" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNtqO0gB1tBeqlLt4AEo0RTD58akHxmEYBw&s" alt="PayPal" />
            <img src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="MasterCard" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsiMPrJthkPkKxscfEIQhIFELPzSbhV7lmw&s" alt="Google Pay" />
            </div>
        </div>
        </div>


    </div>
  );
}

export default Welcome;
