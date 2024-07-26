import { useState } from "react"


function TabFun(){

    const [change,setChange]=useState('');

    const ChangeUILogin=()=>
    {
        setChange('Login message');
    }
    const ChangeUIRes=()=>
        {
            setChange('Register message');
        }
    
    return (
        <div>
            <button type="button" onClick={ChangeUILogin} class="btn btn-dark">login</button>
            <button type="button" onClick={ChangeUIRes} class="btn btn-dark">register</button>
            <p>{change}</p>
        </div>
    )
}
export default TabFun;