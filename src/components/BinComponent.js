import React from "react"
import _isEqual from "lodash/isEqual"
class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps){
        console.log(nextProps.prop1)
        console.log(this.props.prop1)
        console.log(_isEqual(nextProps.prop1,this.props.prop1))
        if(_isEqual(nextProps.prop1,this.props.prop1)){
            return false
        }
        if(!(_isEqual(nextProps.prop1,this.props.prop1))){
            return true
        }
    }
    render(){
        console.log("bin component")
        return(
            <div>
                <h1>Trash Component</h1>
                {
                    this.props.prop1.map((item,key)=>(
                        <div class={key}>
                        <h3>{item.title}</h3>
                        <button onClick={()=>this.props.prop2(item.id)}>restore</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default BinComponent