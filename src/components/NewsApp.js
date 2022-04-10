import axios from "axios"
import React from "react"

class NewsApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
  /*  componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            return res.json()}).then((res)=>this.setState({result:res})).catch((err)=>console.log(err))
        
    }
    callAPI=()=>{
        try{
        fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            return res.json()}).then((res)=>this.setState({result:res}))
        }
        catch(e){
            console.log("err occured")
        }
        }*/
     callAPI=()=>{

     }

    render(){
      
        return(
           <div>
               <h1>NewsApp</h1>
               <button onClick={()=>this.callAPI()}>search</button>
          {
                   this.state.result.map((item)=>(
                       <div>
                           <h1>{item.title}</h1>
                           </div>
                   ))
               }
           </div>
        )
    }
}
export default NewsApp