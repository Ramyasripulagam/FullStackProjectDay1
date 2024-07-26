function CardUI(prop){
    return (
        <div className="body">
            <div className="card">
                <div className="Img">
                <img src={prop.Image} className="card-img-top" width={300} alt="pic"/>
                </div>
                <div className="details">
                    <h6>{prop.Title}</h6>
                    <div className="rate">
                        <div className="star">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        </div>
                        <p className="p1">({prop.Count})</p>
                    </div>
                    <div className="cost">
                        <h5>₹{prop.Price}</h5>
                        <h6>₹3650</h6>
                    </div>
                    
                </div>
                <div className="btn">
                    <button><i class="fa fa-shopping-cart"></i> Add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default CardUI;