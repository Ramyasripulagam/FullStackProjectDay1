import React from "react";

class Eight extends React.Component{
    count =0;
    name='Ramya';
    constructor(){
        super();
        console.log("Constructor");
        this.state={
            number:1
        };
    }
    componentDidMount(){
        console.log("Mounted");
       
        
    }
    componentDidUpdate(){
        console.log("Component updated")
    }
    componentWillUnmount(){
        console.log("unMounted");
    }
    funEightBtnClick=()=>{
        console.log("clicked!");
        console.log(this.count+1);
        this.setState({number: this.state.number+7});
        
    }
render(){
    return(
        <div>
            <h1>{this.count}{this.name}{this.state.number}</h1>    
            <button type="button" className="btn btn-primary" onClick={this.funEightBtnClick}>Click here</button>        
        </div>
        
    );
}
}
export default Eight;