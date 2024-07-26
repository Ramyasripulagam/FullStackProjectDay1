import { useRef } from "react";
function Eleven(){
    const firstRef=useRef(null);//reference

    const formSubmit=(event)=>{
        event.preventDefault();//prevent reload
        console.log("Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';//clear value
    }
    return(
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Eleven;