import { extend } from "lodash"
import React from "react"
class DemoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"initial"
        }
    }
    render(){
        const {prop1,prop2}=this.props
        return(
            <div>
                <h1>{prop1}</h1>
            </div>
        )
    }
}
export default DemoComponent