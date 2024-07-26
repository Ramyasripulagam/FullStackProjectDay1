import { useRef, useState ,useEffect, useContext} from "react";
import { globalContext } from "./App";

function LoginPage(){
    // const width=200;
    const firstRef=useRef(null);
    const secondRef=useRef(null);
    const [loginMessage,setMessage]=useState('');
    const {globalIsLogin,setGlobalIsLogin}=useContext(globalContext)
    //useEffect to focus on input field
    useEffect(()=>{
        firstRef.current.focus();
    });
    const formSubmitted=(event)=>{
        //to prevent default refresh after submitting
        event.preventDefault();
        if(firstRef.current.value == secondRef.current.value){
            setGlobalIsLogin(true);
            setMessage("Correct");
            localStorage.setItem("name","ReactJs");
            localStorage.setItem("branch","AIML");
       
        }
        else{
            // console.log("Incorrect");
            setMessage("Incorrect");
            //print on user interface
        }
        // firstRef.current.value='';
        // secondRef.current.value='';
        //clear value in text area after submitting
    }
    return(
        <div className="container" style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
         <div className="card" style={{width:'290px',padding:'30px',height:'350px'}}>
         <div>
            <form onSubmit={formSubmitted} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h4>Login</h4>
                <p>Provide your details to login</p>
                <label><b>College Id</b></label>
                <input type="text" ref={firstRef} required/>
                <label><b>Password</b></label>
                <input type="password" ref={secondRef} required/>
                <div style={{fontSize: '12px' ,width:'200px',marginTop:'30px',marginLeft:'90px'}}>
                <button type="submit" className="btn btn-dark">Login</button>
                </div>
                {loginMessage}
            </form>
        </div>
        </div>
        </div>
    );
}
export default LoginPage;