import { useContext, useState } from "react";
import { globalContext } from "./App";
import { createContext} from "react";
export const loginContext=createContext();
function RegisterPage(){

    const [collegeid,setCollege]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail] =useState('');
    const [Branch,setBranch]=useState('');
    const [year,setYear]=useState('');
    const [genderValue,setGender]=useState('');
    const [user,setUser]=useState({});
    const {globalUserObject,setGlobalUserObject}=useContext(globalContext);
    
    const getCollegeid=(event)=>{
        console.log(event.target.value);    
        setCollege(event.target.value);    
    }
    const getpassword=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    const getemail=(event)=>{
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    const getbranch=(event)=>{
        console.log(event.target.value);
        setBranch(event.target.value);
    }
    const getyear=(event)=>{
        console.log(event.target.value);
        setYear(event.target.value);
    }
    const getGender=(event)=>{
        console.log(event.target.value);
        setGender(event.target.value);
    }
    const submitData=(event)=>{
        event.preventDefault();
        const obj={
            collegeid,password,email,Branch,genderValue
        }
        console.log(obj);
        setGlobalUserObject(obj);
        setUser(obj);
        console.log(user);
        
    }
    

    return(
        <loginContext.Provider value={{collegeid,setCollege,password,setPassword}}>

        <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'70px'}}>
            
            <div class="card" style={{width:'20rem',height:'34rem'}}>
                <div class="card-body">
                <h5 class="card-title">Register</h5> 
                <p class="card-subtitle mb-2 text-body-secondary">Provide your details to register</p>
                <form>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',gap:'10px'}}>
                    <div>
                    <label>College id</label>
                    <input type="text" onChange={getCollegeid} autoFocus placeholder="College id"required></input></div>
                    <div>
                    <label>Password</label>
                    <input type="password" onChange={getpassword}  placeholder="Password"  required></input>
                    </div>
                    <div>
                    <label>Email address</label>
                    <input type="email"onChange={getemail}  placeholder="Email address"  required></input>
                    </div>
                    <div>
                    <label>Branch</label><br/>
                    <select value={Branch} onChange={getbranch} style={{width:'286',height:'37px',border:'1px solid #e3dddd' ,borderRadius:'5px' }}>
                        <option value="">Select a branch</option>
                        <option value="AIML">AIML</option>
                        <option value="CSE">CSE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="EEE">EEE</option>
                        <option value="IT">IT</option>
                        <option value="CS">CS</option>
                    </select>
                    </div>
                    <div>
                    <label>Year</label><br/>
                    <select name="cars" id="cars"value={year} onChange={getyear}  style={{width:'286',height:'37px',border:'1px solid #e3dddd' ,borderRadius:'5px' }}>
                        <option value="">Select a year</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </div>
                    
                    <label >Gender</label>
                        <div  style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',gap:'10px'}} >
                            <input type="radio" checked={genderValue=="true"} value="male" onChange={getGender} ></input>Male
                            <input type="radio"  checked={genderValue=="false"} value="female" onChange={getGender}></input>Female
                        </div>
                    </div>
                    
                    <div style={{display:'flex',justifyContent:'center',marginTop:'15px'}}>
                    <button type="button" className="btn btn-dark" onClick={submitData} >Register</button></div>
                </form>
                </div>
                
            </div>
            
        </div>
        </loginContext.Provider>
       
    )
}
export default RegisterPage;