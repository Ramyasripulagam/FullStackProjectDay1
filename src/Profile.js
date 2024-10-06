import { useContext, useEffect } from "react";
import { globalContext } from "./App";
import Navigation1 from "./Navigation1";
export default function Profile(){
    const {globalUserObject}=useContext(globalContext);
    const {setGlobalIsLogin}=useContext(globalContext)
    const logout=()=>{setGlobalIsLogin(false)}
    useEffect(()=>{
        const name =localStorage.getItem("name");
        const branch =localStorage.getItem("branch");
        console.log(name);
    })
    return(
        <div>
            <Navigation1/>
        <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
            
            <div  className="card" style={{padding:'18px',height:'510px',width:'340px'}}>
                <div>
                    <div>
                    <h2 style={{fontWeight:'bold'}}>Profile</h2>
                    <p style={{color:'rgba(0, 0, 0, 0.464)'}}>Your details</p>
                    </div>
                    <div>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>College Id</h6>
                        <p>{globalUserObject.collegeid}</p>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>Password</h6>
                        <p>{globalUserObject.password}</p>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>Email address</h6>
                        <p>{globalUserObject.email}</p>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>Branch</h6>
                        <p>{globalUserObject.branch}</p>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>Year</h6>
                        <p>{globalUserObject.year}</p>
                        <h6 style={{color:'rgba(0, 0, 0, 0.464)'}}>Gender</h6>
                        <p>{globalUserObject.genderValue}</p>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                        <button className="btn btn-secondary" onClick={logout}>Log out</button>
                        </div>
                        

                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}