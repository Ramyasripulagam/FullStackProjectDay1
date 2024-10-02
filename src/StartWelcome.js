import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "./StartWelcome.css";
function StartWelcome(){
    
    return(
        <div className="welcome-page">
            
            
            <Navigation/>
            <div className="Welcome-body">
                <div className="body-left">
                    <div className="title">
                    <h1>Discover and Find Your Own Fashion!</h1>
                    </div>
                    <div>
                    <p>Explore our curated collection of stylish clothing aand accessories tailored to your unique taste.</p>
                    </div>
                    <div style={{marginTop:'10px'}}>
                    <Link to="/loginpage" style={{textDecoration:'none',backgroundColor:'#f3cf40',color:'black',padding:'6px',boxShadow:'0px 4px 6px -1px gray'}}>EXPLORE NOW</Link>
                    </div>
                </div>
                <div className="body-right">
                    <div className="background-img"></div>
                    <div className="image"><img src="https://t3.ftcdn.net/jpg/02/89/88/94/360_F_289889453_guDc5hrax0yi4kOBIeNSSrxiWpoNRtXx.webp"></img></div>
                </div>
            </div>
            
            
        </div>
    )
}
export default StartWelcome;