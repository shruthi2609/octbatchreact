import React from "react"
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside derived state from props")
        
        return { msg :props.prop1}
    }
    componentDidUpdate(){
        console.log("component updated")
    }
  /*  componentDidMount(){
        console.log("inside did mount")
    }*/
    sampleMethod=()=>{
        this.setState({count:this.state.count+0})
    }
    render(){
        console.log("inside render method")
        return(
            <div>
                <h1>Class Component LifeCycle</h1>
                <h2>{this.state.msg}</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.sampleMethod}>+</button>
            </div>
        )
    }
}
export default LifeCycleMethods