
import { useEffect,useState} from "react";
function Nine2(){
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log("Use effect is called");
    },[]);
    const btnDecreament=()=>{
        //{count==0}?--:
        if(count<=0){
            return setCount(0)
        }else{
            setCount(count-1);
            setGlobalCount(globalCount+1)
        }
        
    }
    const btnIncreament=()=>{
        setCount(count+1);
    }
   
    const Addtocart=()=>{
        setCount(1);
    }
    
    return(
        <div style={{display:'flex'}}>
            
            <div style={{display:'flex',margin:'10px'}}>
            <button className="btn btn-outline-dark " onClick={btnDecreament}>-</button>
            <h4 style={{margin:'10px'}}>{count}</h4>
            <button className="btn btn-outline-dark" onClick= {btnIncreament}>+</button>
            </div>
            <div style={{margin:'20px'}}>
            <button  className="btn btn-primary btn-sm" type="button" onClick= {Addtocart}>Add to cart</button>
            </div>
        </div>
    )
}
export default Nine2;