import React from "react";
import "./Profilepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle,faHeadset,faSignOutAlt, faChevronRight, faUserCircle, faShoppingCart, faArrowLeft, faReceipt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

export default function Profilepage({ closePopup }) {
  return (
    <div className="background" onClick={closePopup}> {/* Background click closes the popup */}
      <div className="pro-container" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside the container */}
        <div className="small-column">
            <div className="back-btn">
                <Link to='/welcome'>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: "black" }} />
                </Link>
            </div>
          <div className="row-1">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
              alt="profileImage"
            />
            <h4>Name</h4>
            <p>abc@gmail.com</p>
            <div className="middle-row">
              <div className="sub-con">
                <Link to="">
                  <FontAwesomeIcon icon={faReceipt} style={{ color: "black" }} />
                </Link>
                <p>My Orders</p>
              </div>
              <div className="sub-con">
                <Link to="">
                  <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} />
                </Link>
                <p>Wishlist</p>
              </div>
              <div className="sub-con">
                <Link to="/cartproducts">
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: "black" }} />
                </Link>
                <p>My Cart</p>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="sub-row2">
              <div className="subrow-left">
                <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "19px", padding: "4px", paddingRight: "20px" }} color="rgb(0,0,0,0.5)" />
                <h5>My Account</h5>
              </div>
              <div>
                <Link to='/profile'>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "19px", padding: "4px" }} color="rgb(0,0,0,0.5)" />
                </Link>
              </div>
            </div>
            {/* Repeat similar rows */}
            <div className="sub-row2">
              <div className="subrow-left">
                <FontAwesomeIcon icon={faHeadset} style={{ fontSize: "19px", padding: "4px", paddingRight: "20px" }} color="rgb(0,0,0,0.5)" />
                <h5>Customer care</h5>
              </div>
              <div>
                <Link to='/'>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "19px", padding: "4px" }} color="rgb(0,0,0,0.5)" />
                </Link>
              </div>
            </div>
            <div className="sub-row2">
              <div className="subrow-left">
                <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "19px", padding: "4px", paddingRight: "20px" }} color="rgb(0,0,0,0.5)" />
                <h5>About Us</h5>
              </div>
              <div>
                <Link to='/'>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "19px", padding: "4px" }} color="rgb(0,0,0,0.5)" />
                </Link>
              </div>
            </div>
            <div className="sub-row2">
              <div className="subrow-left">
              <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: "19px", padding: "4px", paddingRight: "20px" }} color="rgb(0,0,0,0.5)" />
              <h5>Logout</h5>
              </div>
              <div>
                <Link to='/'>
                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "19px", padding: "4px" }} color="rgb(0,0,0,0.5)" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
