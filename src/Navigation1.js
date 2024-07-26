import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext} from "./App";

function Navigation1(){
    const {globalCount,setGlobalCount}=useContext(globalContext)
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#e5e5e5',padding:'15px'}}>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <h6 style={{marginTop:'4px'}}>SEVS Commerce</h6>
            <Link to='/'  style={{textDecoration:'none',marginLeft:'10px',color:'black'}}>Home</Link>
            <Link to="/products"  style={{textDecoration:'none',marginLeft:'10px',color:'black'}}>Products</Link>
        </div>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
        <Link to="/cart" style={{textDecoration:'none',marginLeft:'10px',color:'black'}}>Cart{globalCount}</Link>
        <Link to="/profile"  style={{textDecoration:'none',marginLeft:'10px',color:'black'}}>Profile</Link>
        <Link to="/"  style={{textDecoration:'none',marginLeft:'10px',color:'black'}}>Logout</Link>
    </div>
    </div>
    );
}
export default Navigation1;