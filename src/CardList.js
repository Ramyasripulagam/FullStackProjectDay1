import "./Stylecard.css"
import CardUI from "./Card";
import { useEffect,useState } from "react";
import Navigation1 from "./Navigation1";
function CardListUI(){
    

    const [data,setData]=useState([]);
    
    useEffect(()=>{
        const fetchMyData = async ()=>{
        const res= await fetch("https://fakestoreapi.com/products");
        const resData=await res.json();
        setData(resData);
        }
        fetchMyData();
    })

    return(
        <div>
            
        <div style={{display:'flex',flexWrap:'wrap'}}>
            
            {
                data.map(
                    (item,id)=> (<CardUI key={id} 
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
export default CardListUI;