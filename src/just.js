import { useContext,useRef, useState ,useEffect} from "react";
import { CartContext } from "./Home";

export default function Login(){
    const loginRef=useRef(null);
    const passwordRef=useRef(null);
    const[getInput,setInput] = useState("");
    const {isLogin,setIsLogin} = useContext(CartContext);

    // use effect to focus on the input field
    useEffect(() =>{
        // setCount(5);
        loginRef.current.focus();
        
    });


    const formSubmitted =(event)=>{
        event.preventDefault();
        console.log("Form Submitted!");
        if(loginRef.current.value === passwordRef.current.value){
            console.log("Correct");
            setInput("correct");
            setIsLogin(true);
            

        } 
        else{
            console.log("Incorrect");
            setInput("Incorrect");
            
        }  
        loginRef.current.value="";     
        passwordRef.current.value="";
        
    }
    return(
        

        <div className="container" style={{display:"flex" ,justifyContent:"center"}}>
            <div className="card" style={{width:"300px",padding:'20px'}} >
                <h1>Login</h1>
                <p>Provide your details to login</p>
                <form onSubmit={formSubmitted}
                    style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                        <label>College Id</label>
                        <input type="text" placeholder="College Id" ref={loginRef}/>
                        <label>Password</label>
                        <input type="password" placeholder="Password" ref={passwordRef}/><br></br>
                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                            <button type="submit" className="btn btn-dark" style={{width:"100" ,justifyContent:"flex-end"}} >Login</button>
                        </div>
                        <div>
                            {
                            globalIsLogin?
                            setMessage('')
                            
                            :setMessage('Incorrect Password/Username')
                            }
                        </div>
                            
                </form>

            </div>
        </div>
        
    );
}