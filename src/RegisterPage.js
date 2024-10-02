import { useRef, useState ,useEffect, useContext} from "react";
import { globalContext } from "./App";
import "./RegisterPage.css"
import { Link, Navigate } from "react-router-dom";

function RegisterPage(){
    // const width=200;
    const firstRef=useRef(null);
    const secondRef=useRef(null);
    const ThirdRef=useRef(null);
    const FourthRef=useRef(null);
    const [signupMessage,setsignupMessage]=useState('');
    const {globalIssignup,setGlobalIssignup}=useContext(globalContext);

    // useEffect to focus on input field
    useEffect(() => {
        if (firstRef.current) {
            firstRef.current.focus();
        }
    }, []);
    if (globalIssignup) {
        return <Navigate to="/welcome" />;
    }
  

    const formSubmitted=(event)=>{
        event.preventDefault();
        //to prevent default refresh after submitting
        if(ThirdRef.current.value === FourthRef.current.value){
            setGlobalIssignup(true);
            setsignupMessage('');

            localStorage.setItem("name",firstRef);
            localStorage.setItem("password",ThirdRef);
        }
        else{
            // console.log("Incorrect");
            setsignupMessage("Password doesn't match");
            //print on user interface
        }
    
        //clear value in text area after submitting
    }
   

    return(
        <div className="Regis-body">
            
            <div className="container-signup" > 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI-mF2zw6nrMP7PTpyUwSQcHolkKSipFHG87rHQjmkv09wk4svr2RwZ9gLEePcMxgbfQ&usqp=CAU" alt="EcoRa"></img>

                
                    <form onSubmit={formSubmitted} >
                        <div class="sign-form">
                        <h2>Signup</h2>
                        <p>Provide your details to signup</p>
                        <label><b>Name</b></label>
                        <input type="text" ref={firstRef} required/>
                        <label><b>Email</b></label>
                        <input type="email" ref={secondRef} required/>
                        <label><b>Password</b></label>
                        <input type="password" ref={ThirdRef} required/>
                        <label><b>Conform Password</b></label>
                        <input type="password" ref={FourthRef} required/>

                        <div className="btn-submit">
                        <button type="submit" className="btn btn-dark">Signup</button>
                        </div>

                        <p className="hidden">Already have an account <Link to="/loginpage">LoginUp</Link></p>
                        <div class="match">
                        {signupMessage}
                        </div>
                        </div>
                    </form>
                   
               
            </div>
        </div>
    );
}
export default RegisterPage;