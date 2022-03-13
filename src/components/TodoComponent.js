import React from "react";
import PendingComponent from "./PendingComponent"
import CompletedComponent from "./CompletedComponent";
const tododata=[
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:tododata
        }
    }
    getCompletedItems=()=>{
      const arr=this.state.todos.filter((item)=>item.completed===true)
      return arr
    }
    getPendingItems=()=>{
      const arr=this.state.todos.filter((item)=>item.completed===false)
      return arr
    }
    changeCompletionStatus=(todoID)=>{
      const temp=[...this.state.todos]
      const obj=temp.find((item)=>item.id===todoID)
      obj.completed=!obj.completed
      this.setState({todos:temp})
    }
    render(){
        return(
            <div>
                <h1>Todo App</h1>
            <PendingComponent prop1={this.getPendingItems()}></PendingComponent>  
            <CompletedComponent prop1={this.getCompletedItems()}></CompletedComponent> 
           
   <button onClick={()=>this.changeCompletionStatus(5)}>check</button>
            </div>  
        )
    }
}

export default TodoComponent