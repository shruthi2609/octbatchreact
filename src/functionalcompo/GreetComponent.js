import { useState } from "react"
/*
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
} */
let tododata=[
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        "active":true
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true,
        "active":true
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        "active":true
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true,
        "active":true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
        "active":true
      },
]
const GreetComponent=()=>{
/**
 obj
 reference - 
 function 
 */
    let [msg,setMsg]=useState("inital")
    let [{firstname,lname},setFullName]=useState({
        firstname:"user",
        lname:"henry"
    })
    let [todo,setTodo]=useState(tododata)
    let [count,setCount]=useState(0)
    const changeMessage=()=>{
      /*  console.log("func is called")
        setMsg("john")*/
        setFullName({firstname:"john"})
        setCount(2)

    }
    return(
      
        <div>
            <h1>Welcome {firstname} {count}</h1>
            <button onClick={changeMessage}>change</button>
        </div>
    )
}
export default GreetComponent