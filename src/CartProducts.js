 
import { useEffect,useState } from "react";

function CartProducts(props){

    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    },[]);
    const btnDecreament=()=>{
        //{count==0}?--:
        if(count<=1){
            
            return setCount(1)
        }else{
            setCount(count-1);
            
        }
        
    }
    const btnIncreament=()=>{
        setCount(count+1);
    }
   
    //const Addtocart=()=>{
    //    setCount(1);
    //}

    return(
        <div>
            <h1>Cart</h1>
            <div>
                <div style={{display:"flex",border:'1px solid rgb(0,0,0,0.225)'}}>
                    <div>
                        <img src={props.Image} alt="Dummy" />
                    </div>
                    <div style={{margin:'10px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                        <h5>{props.Title}</h5>
                        <p>{props.Des}</p>
                        <div style={{}}>
                            <div style={{display:'flex',margin:'10px'}}>
                            <button className="btn btn-outline-dark " onClick={btnDecreament} style={{width:'40px',height:'40px',marginTop:'10px'}}>-</button>
                            <h4 style={{marginTop:'12px',marginRight:'10px',marginLeft:'10px'}}>{count}</h4>
                            <button className="btn btn-outline-dark" onClick= {btnIncreament} style={{width:'40px',height:'40px',marginTop:'10px',marginLeft:'3px'}}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartProducts;