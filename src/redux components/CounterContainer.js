import { connect } from "react-redux";
import CounterComponent from "./CounterComponent";
import { increment,decrement } from "../actions/counterActions";

const mapStatetoProps=(state)=>{
return{
    count:state
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(CounterComponent)