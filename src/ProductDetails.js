import "./style2Ass.css";

const ProductDetails = () => {
    const reviews = [
        { reviewer: 'Reviewer name', review: 'This product is good' },
        { reviewer: 'Reviewer name', review: 'This product is bad' }
    ];
    return(
        <div class="main">
            
            <div className="Body-main">
                <h1>Product Name</h1>
                    <div className="body-part">
                        <div className="image">
                            <img src="./sampleimg.jpg" alt="img"/>
                            <div className="right-image" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'10px'}}>
                            <div>
                                <h5>Product Name</h5>
                                <p>Description Description Description Description Description Description Description Description Description Description Description  Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
                            </div>
                            <div className="btn1">
                                <h5>₹500</h5>
                                <button style={{backgroundColor:'#00cc00',border:'none',borderRadius:'4px',width:'100px',height:'35px',color:'white'}} type="button">Add to cart</button>
                            </div>
                            </div>
                        </div>
                        <div className="secPart">
                            <h6 style={{fontSize:'18px'}}>Product specifications</h6>
                            <p>Description Description Description Description Description Description Description Description Description Description Description  Description Description Description Description Description Description Description Description Description Description Description Description Description</p>

                        </div>
                        <div style={{margin:'10px'}}>
                            <h6>Review</h6>
                            <div style={{display:'flex',flexWrap:'wrap'}} >
                            <input type="text" placeholder="Type a review" style={{width:'1340px',marginRight:'6px',borderRadius:'5px'}}/>
                            <button type="button" class="btn btn-dark">Add review</button>                   
                            </div>
                        </div>
                        <div className="reviews">
                            <h6>Reviews</h6>
                            {reviews.map((review, index) => (
                                <div key={index}>
                                    <h6>{review.reviewer}</h6>
                                    <p>{review.review}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
         
    )
    
}
export default ProductDetails;