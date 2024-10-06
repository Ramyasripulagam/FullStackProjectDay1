import { useState, useContext } from "react";
import { globalContext } from "./App";
import './Stylecard.css';

function CardUI(prop) {
    const { globalCount, setGlobalCount } = useContext(globalContext);
    
    // State for individual products, initialized with a product id
    const [cartState, setCartState] = useState({});

    // Function to handle incrementing the product quantity for each card
    const btnIncrement = (id) => {
        setCartState((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,  // Increase the specific card's quantity
        }));
        setGlobalCount(globalCount + 1);  // Increase global cart count
    };

    // Function to handle decrementing the product quantity for each card
    const btnDecrement = (id) => {
        if (cartState[id] > 0) {
            setCartState((prevState) => ({
                ...prevState,
                [id]: prevState[id] - 1,  // Decrease the specific card's quantity
            }));
            setGlobalCount(globalCount - 1);  // Decrease global cart count
        }
    };

    // Function to handle adding product to cart (when clicked first time)
    const addToCart = (id) => {
        if (!cartState[id]) {  // Only add to cart if the product is not already in the cart
            setCartState((prevState) => ({
                ...prevState,
                [id]: 1,  // Set initial quantity to 1
            }));
            setGlobalCount(globalCount + 1);  // Update global cart count
        }
    };

    return (
        <div className="body">
            <div className="card">
                <div className="Img">
                    <img src={prop.Image} className="card-img-top" width={300} alt="pic" />
                </div>
                <div className="details">
                    <h6>{prop.Title}</h6>
                    <div className="rate">
                        <div className="star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <p className="p1">({prop.Count})</p>
                    </div>
                    <div className="cost">
                        <h5>₹{prop.Price}</h5>
                        <h6>₹3650</h6>
                    </div>
                </div>
                <div className="btn">
                    {/* Conditional rendering based on whether the product is added to cart */}
                    {!cartState[prop.id] ? (
                        <button onClick={() => addToCart(prop.id)}>
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                    ) : (
                        <div style={{ display: 'flex' }}>
                            <button className="Inc-dec-btn" onClick={() => btnDecrement(prop.id)}>-</button>
                            <h4>{cartState[prop.id]}</h4>
                            <button className="Inc-dec-btn" onClick={() => btnIncrement(prop.id)}>+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardUI;
