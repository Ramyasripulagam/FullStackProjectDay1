
function Payment(){

    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh'}}>
            <h1>Payment</h1>
            <div style={{border:'1px solid rgb(0,0,0,0.223',width:'280px',height:'400px',borderRadius:'3px',padding:'18px'}}>
                
                <h6 style={{marginBottom:'20px'}}>Enter your Card details</h6>

                <form>
                    <div>
                    <div style={{marginBottom:'20px'}}>
                    <label>Card Number</label>
                    <input type="text" placeholder="Card number" style={{width:'240px',borderRadius:'4px'}}/>
                    </div>
                    <div  style={{marginBottom:'20px'}}>
                    <label>Card name</label>
                    <input type="text" placeholder="Card name" style={{width:'240px',borderRadius:'4px'}}/>
                    </div>
                    <div  style={{marginBottom:'20px'}}>
                    <label>Expiry date</label>
                    <input type="text" placeholder="Expiry date" style={{width:'240px',borderRadius:'4px'}}/>
                    </div>
                    <div  style={{marginBottom:'30px'}}>
                    <label>CVV</label><br/>
                    <input type="text" placeholder="CVV" style={{width:'240px',borderRadius:'4px'}}/>
                    </div>
                    <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <button type="button" class="btn btn-dark">Place order</button>
                    </div>
                    </div>

                </form>

            </div>
        </div>
    )

}
export default Payment;