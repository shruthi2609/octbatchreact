import React from "react";
class ToggleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"john",
            email:"john@gmail.com",
            status:false
        }
    }
    togglestatus=()=>{
        this.setState({status:!this.state.status})
    }
    render(){
        return(
          <div>
             {
                 this.state.status?
                 <div><h1>{this.state.username} {this.state.email}
                 </h1>
                 <button onClick={this.togglestatus}>logout</button>
                 </div>:
                 <button onClick={this.togglestatus}>login</button>
             }  
            
            </div>
        )
    }
}
export default ToggleComponent