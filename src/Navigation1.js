import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./App";
import Profilepage from "./Profilepage"; // Import the Profilepage component
import './Navigation1.css';

function Navigation1() {
    const { globalCount } = useContext(globalContext);
    const [isProfileOpen, setIsProfileOpen] = useState(false); // Track if profile modal is open

    const toggleProfile = () => setIsProfileOpen(!isProfileOpen); // Toggle the profile modal

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#ffd633', fontFamily: 'serif', height: '50px' }}>
                {/* Logo */}
                <div>
                    <h6 style={{ fontSize: '25px', fontWeight: 'bold' }}>EcoRa</h6>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    {/* Search Bar */}
                    <div style={{ border: '1px solid lightgrey', borderRadius: '20px' }}>
                        <input placeholder='search' style={{ border: 'none', borderRadius: '20px',padding:'5px' }} />
                    </div>
                    {/* Cart Icon */}
                    <div>
                        <Link to="/cartproducts" style={{ textDecoration: 'none', marginRight: '10px', color: 'black', fontSize: '20px' }}>
                            <i className="fa fa-shopping-cart"></i>{globalCount}
                        </Link>
                    </div>
                    {/* Profile */}
                    <div>
                        <div className="profile-icon-container" onClick={toggleProfile}>
                            <i className="fa fa-user-circle-o" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px', cursor: 'pointer', fontSize: '20px' }}>
                    <Link to='/welcome' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>Shop</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Offers</Link>
                    <Link to="" style={{ textDecoration: 'none', color: 'white' }}>Men's Wear</Link>
                    <Link to="" style={{ textDecoration: 'none', color: 'white' }}>Kid's Wear</Link>
                </div>
            </div>
            
            {/* Profile Modal Popup */}
            {isProfileOpen && (
                <div className="profile-modal">
                    <Profilepage />
                    <div className="close-modal" onClick={toggleProfile}>X</div>
                </div>
            )}
        </div>
    );
}

export default Navigation1;
