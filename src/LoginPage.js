import { useRef, useState ,useEffect, useContext} from "react";
import { globalContext } from "./App";
import "./LoginPage.css";
import { Link, Navigate } from "react-router-dom";
import Welcome from "./Welcome";

function LoginPage(){
    // const width=200;
    const firstRef=useRef(null);
    const secondRef=useRef(null);
    const [loginMessage,setMessage]=useState('');
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext);

    // useEffect to focus on input field
    useEffect(() => {
        if (firstRef.current) {
            firstRef.current.focus();
        }
    }, []);
    if (globalIsLogin) {
        return <Navigate to="/welcome" />;
    }
  

    const formSubmitted=(event)=>{
        event.preventDefault();
        //to prevent default refresh after submitting
        if(firstRef.current.value === secondRef.current.value){
            setGlobalIsLogin(true);
            setMessage('');

            //localStorage.setItem("name","ReactJs");
            //localStorage.setItem("branch","AIML");
        }
        else{
            // console.log("Incorrect");
            setMessage("Incorrect Username/Password");
            //print on user interface
        }
        
        //clear value in text area after submitting
    }
   

    return(
        <div className="login-body">
            
            <div className="container" > 
                <div className="left-side" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI-mF2zw6nrMP7PTpyUwSQcHolkKSipFHG87rHQjmkv09wk4svr2RwZ9gLEePcMxgbfQ&usqp=CAU" alt="EcoRa"></img>
                    <form onSubmit={formSubmitted} >
                        
                        <h4>Login</h4>
                        <p>Provide your details to login</p>
                        <label><b>Username</b></label>
                        <input type="text" ref={firstRef} required/>
                        <label><b>Password</b></label>
                        <input type="password" ref={secondRef} required/>
                        <Link>Forgot Password?</Link>
                        <div className="btn-submit">
                        <button type="submit" className="btn btn-dark">Login</button>
                        </div>
                        <p className="hidden">Don't have an account <Link to="/registerpage">signUp</Link></p>
                        
                        {loginMessage}
                    </form>
                
                </div>
                <div className="right-side">
                    <div className="sign-con">
                        <h1>Welcome!</h1>
                        <h2>Don't have an account?</h2>
                        <div className="signup-button">
                            <Link to="/registerpage" className="link">SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;