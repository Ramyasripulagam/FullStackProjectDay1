import { Link } from "react-router-dom";
import { TbShoppingBagSearch } from "react-icons/tb";

function Navigation(){
    return(
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',backgroundColor:'#ffd633',padding:'15px',fontFamily:'serif'}}>
            <div><h4 style={{marginTop:'4px',fontWeight:'bold'}}>EcoRa</h4></div>
            <div style={{display:'flex',margin:'5px',cursor:'pointer',fontSize:'18px',marginRight:'50px'}}>
                
                <Link to='/'  style={{textDecoration:'none',marginLeft:'20px',color:'black'}}>Home</Link>
                <Link to="/startpage"  style={{textDecoration:'none',marginLeft:'60px',color:'black'}}>Shop</Link>
                <Link to="/loginpage"  style={{textDecoration:'none',marginLeft:'60px',color:'black'}}>About</Link>
                <Link to="/loginpage"  style={{textDecoration:'none',marginLeft:'60px',color:'black'}}>Contact</Link>
            </div>
            <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
                <Link to="/loginpage"  style={{textDecoration:'none',margin:'10px',color:'black'}}><TbShoppingBagSearch /></Link>
                <Link to="/loginpage" style={{textDecoration:'none',marginLeft:'10px',color:'white',backgroundColor:'#b38f00',width:'110px',height:'33px',borderRadius:'10px',paddingLeft:'9px',paddingTop:'4px',marginRight:'20px'}}>Login/SignUp</Link>
            </div>
        </div>
    );
}
export default Navigation;