import {useState} from "react";

function Ten(){

    const [review, setReview] = useState('');
    const [reviewToDisplay, setDisplay] = useState('');

    const Addreview=()=>{
        console.log("Adding review...");
        setDisplay(review)
    }

    const  inputValueChange=(event)=>{
        console.log(event.target.value)
        setReview(event.target.value);
    }

    return(
        <div style={{margin:'10px'}}>
            <input type="text" placeholder="Enter a review" onChange={inputValueChange}/>
            <button className="btn btn-dark btn-sm" onClick={Addreview} >Add review</button>
            <p>{reviewToDisplay}</p>
            <ul>
                {review.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default Ten;