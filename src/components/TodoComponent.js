import React from "react";
import PendingComponent from "./PendingComponent"
import CompletedComponent from "./CompletedComponent";
import BinComponent from "./BinComponent";

class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[]
        }
    }
    static getDerivedStateFromProps(props,state){
      return {todos:props.prop1}
    }
    getCompletedItems=()=>{
      const arr=this.state.todos.filter((item)=>item.completed===true)
      return arr
    }
    getPendingItems=()=>{
      const arr=this.state.todos.filter((item)=>item.completed===false)
      return arr
    }
    getTrashItems=()=>{
      const arr=this.state.todos.filter((item)=>item.active===false)
      return arr
    }
    changeCompletionStatus=(todoID)=>{
      const temp=[...this.state.todos]
      const obj=temp.find((item)=>item.id===todoID)
      obj.completed=!obj.completed
      this.setState({todos:temp})
    }
    changeActiveStatus=(todoID)=>{
      const temp=[...this.state.todos]
      const obj=temp.find((item)=>item.id===todoID)
      obj.active=!obj.active
      this.setState({todos:temp})
    }
    render(){
        return(
            <div>
                <h1>Todo App</h1>
            <PendingComponent prop1={this.getPendingItems()} prop2={this.changeCompletionStatus}></PendingComponent>  
            <CompletedComponent prop1={this.getCompletedItems()} prop2={this.changeActiveStatus}></CompletedComponent> 
            <BinComponent prop1={this.getTrashItems()}
            prop2={this.changeActiveStatus}></BinComponent>
            <BinComponent prop1={this.getTrashItems()}
            prop2={this.changeActiveStatus}></BinComponent>
            </div>  

        )
    }
}

export default TodoComponent