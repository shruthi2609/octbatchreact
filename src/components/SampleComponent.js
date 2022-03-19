import React from "react"
class SampleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"dummy"
        }
    }
    render(){
        return(
            <div>
            <h1>Sample {this.state.msg}</h1>
            <h2>{this.props.prop1}</h2>
            </div>
        )
    }
}
export default SampleComponent