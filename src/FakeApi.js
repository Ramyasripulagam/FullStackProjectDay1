import { useEffect,useState } from "react";
import axios from "axios";
export default function FakeApi(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchMyData = async ()=>{
        const res = await axios.get("https://fakestoreapi.com/users");
        console.log(res)
        const resData=await res.data;
        setData(resData);
        }
        fetchMyData();
        
    })

    return(
        <div>Fetching Data
            
            <table class="table" style={{border:'20px'}}>
            <thead >
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">username</th>
                <th scope="col">password</th>
                <th scope="col">email</th>
            </tr>
            </thead>
            <tbody>
            
            {data.map((item, index) => 
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name.firstname}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            
                        </tr>)}

        
            
            </tbody>
        </table>
      </div>
    )
}