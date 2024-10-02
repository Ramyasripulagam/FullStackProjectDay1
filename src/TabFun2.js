import { useState } from "react"
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";

function TabFun2(){

    
    const [change,setChange]=useState(true);

    const showLogin=()=>{setChange(true)}
    const showRegister=()=>{setChange(false)}

    return (
        <div className="main-container">
            <Navigation/>
            <div className="sub-container">
                
                <div className="container-btn">
                    <button type="submit" onClick={showLogin} class="btn btn-dark" >login</button>
                    <button type="submit" onClick={showRegister} class="btn btn-dark" >register</button>
                </div>
                <div className="Login-reg">
                    {change ?
                        <LoginPage/>
                        :
                        <RegisterPage/>
                    }
                </div>
            </div>
        </div>
    );
}
export default TabFun2;