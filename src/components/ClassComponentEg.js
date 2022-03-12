import React from "react"
class ClassComponentEg extends React.Component{
    constructor(props){
       super(props)
       this.state={
           msg:"inital",
           loading:true
       }
    }
    updateMsg=()=>{
      this.setState({msg:"new",loading:false})
    }
    render(){
      // const {prop1}=this.props
      console.log("render")
        return(
            <div>
                <h1>Class components</h1>
                <h2>{this.props.prop1}</h2>
                <h3>{this.state.msg}</h3>
           <button onClick={this.updateMsg}>update</button>
         
            </div>
        )
    }
}
export default ClassComponentEg