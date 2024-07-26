import { useState } from "react"
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

function TabFun2(){

    
    const [change,setChange]=useState(true);

    const showLogin=()=>{setChange(true)}
    const showRegister=()=>{setChange(false)}

    return (
        <div>
            <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'-260px',marginBottom:'-450px'}}>

            <button type="submit" onClick={showLogin} class="btn btn-dark" style={{marginRight:'20px',width:'80px'}}>login</button>
            <button type="submit" onClick={showRegister} class="btn btn-dark">register</button></div>
            {change ?
                <LoginPage/>
                :
                <RegisterPage/>
            }
        </div>
    )
}
export default TabFun2;