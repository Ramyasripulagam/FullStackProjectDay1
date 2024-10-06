import Navigation1 from "./Navigation1";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome(){

    
    return(
        <div className="home-page">
            <Navigation1/>
            <div className="back-box"></div>
            <div className="home-body">
                <div className="home-left">
                    <div className="title">
                        <h1>Discover and Find Your Own Fashion!</h1>
                    </div>
                    <div>
                        <p>Explore our curated collection of stylish clothing aand accessories tailored to your unique taste.</p>
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <Link to="/products" style={{textDecoration:'none',backgroundColor:'#f3cf40',color:'black',padding:'6px',boxShadow:'0px 4px 6px -1px gray'}}>EXPLORE NOW</Link>
                    </div>
                </div>
                <div className="home-right">
                    <div className="background-img"></div>
                    <div className="image"><img src="https://t3.ftcdn.net/jpg/02/89/88/94/360_F_289889453_guDc5hrax0yi4kOBIeNSSrxiWpoNRtXx.webp" alt='duplicate'></img></div>
                </div>
            </div>
            <div className="section1">
                <h1 className="fir">VERSACE</h1>
                <h1 className="sec">ZARA</h1>
                <h1  className="thi">GUCCI</h1>
                <h1 className="fou">PRADA</h1>
                <h1 className="fif">Calvin Klein</h1>
            </div>
        </div>
    );
}
export default Welcome;