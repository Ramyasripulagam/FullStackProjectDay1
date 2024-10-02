import CartProducts from "./CartProducts";
import { useEffect,useState } from "react";
import Navigation1 from "./Navigation1";

function CardReducer(){
    

    const [data,setData]=useState([]);
    
    useEffect(()=>{
        const fetchMyData = async ()=>{
        const res= await fetch("https://fakestoreapi.com/products");
        const resData=await res.json();
        setData(resData);
        }
        fetchMyData();
        
    },[]);

  
    return(

        <div>
            <Navigation1/>
            <div>
                
                {
                    data.map(
                        (item,id)=> (<CartProducts key={id} 
                            Image={item.image}
                            Title={item.title}
                            Rate={item.rating.rate}
                            
                            Count={item.rating.count}
                            Des={item.description}
                            Price={item.price}
                            Cat={item.category}
                            
                            />))
                
                }
            </div>
            
        </div>
    )
}
export default CardReducer;