import React from "react"
import "./LifeCycleMethods.css"
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"",
            dummy:"react",
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("inside derived state from props")
        return { msg:props.prop1}
    }
 /*  componentDidUpdate(prevProps,prevState){
       if(prevState.count!==this.state.count){
           console.log("state - count is updated")
       }
       if(prevProps.prop1!==this.props.prop1){
           console.log("props has changed")
       }
       if((prevState.count===this.state.count)&& (prevProps.prop1===this.props.prop1)){
           console.log("simply re-rendering")
       }
    }
  /*  componentDidMount(){
        console.log("inside did mount")
    }
    shouldComponentUpdate(nextProps,nextState)
    {
       if((this.state.count!==nextState.count)||(this.state.dummy!==nextState.dummy))
       {
           return true
       }
       if((nextState.count===this.state.count)&& (nextProps.prop1===this.props.prop1))
       {
        return false
        }
    }*/
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState.count)
    }
    sampleMethod=()=>{
        this.setState({count:this.state.count+0})
    }
    updateMessage=()=>{
        console.log("custom function")
        this.setState({dummy:"js"})
    }
    render(){
        console.log("inside render method")
        const mystyle= {
            backgroundColor:"red"
        }
        return(
            <div>
                <h1 style={
                   mystyle
                }>Class Component LifeCycle</h1>
            {  /* <h2>{this.state.msg}</h2>*/}
                 <h2>{this.state.dummy}</h2>
                <h3>{this.state.count}</h3>
                <button className="btn btn-primary" onClick={this.sampleMethod}>+</button>
                <button onClick={this.updateMessage}>change message</button>
            </div>
        )
    }
}
export default LifeCycleMethods