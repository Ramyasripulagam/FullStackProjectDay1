import Three from "./Three";
import Twoo from "./Twoo";
import Four from "./Four";
import Five from "./Five";

function One(){
    const description = "This is a description of the component.";
    const reviews = [
        "Review 1: This is a great component!",
        "Review 2: Really enjoyed using this component.",
        "Review 3: Highly recommend this component."
    ];


    return (
        <div>
            <div>
            <h1>This is from a component</h1>
            <img src="img.jpeg" alt="item" />
            <p>{description}</p>
            </div>
            <div>
            
            <img src="img.jpeg" alt="item" />
            <p>{description}</p>
            </div>
            <div>
                <h2>Reviews:</h2>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
            <Twoo />
            <Three />
            <Four />
            <Five />
        </div>
    );
}

export default One;