import React from "react";
const tododata=[
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
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
    render(){
        return(
            <div>
                <h1>Todo App</h1>
               {
                   this.state.todos.map(
                       (item)=>(
                           <div>
                            <h1>{item.title}</h1>
{item.completed?<h2>Completed</h2>:<h3>Not completed</h3>}
                            </div>
                       )
                   )
               }
            </div>

        )
    }
}
export default TodoComponent