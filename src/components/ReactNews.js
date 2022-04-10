
import React from "react"
import axios from "axios"
class ReactNews extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            result:[],
            search:""
        }
    }
    handleSearchText=(e)=>{
        console.log(e.target.value)
        this.setState({search:e.target.value})
    }
   /* callAPI=()=>{
        fetch("https://hn.algolia.com/api/v1/search?query="+this.state.search,{
            methos:,
            body,
            headers:

        }).then((res)=>{
            return res.json()}).then((res)=>this.setState({result:res.hits})).catch((err)=>console.log(err))
    }*/
    callAPI=()=>{
        axios.get("https://hn.algolia.com/api/v1/search?query="+this.state.search).then((res)=>this.setState({result:res.data.hits})).catch((err)=>console.log(err))
        /*
        axios.post("api",{username:"john@gmail.com"})
         */
    }
    render(){
      
        return(
           <div>
               <h1>NewsApp</h1>
               <form>
                   <input type="text" onChange={(e)=>this.handleSearchText(e)}></input>
               </form>
               <button onClick={()=>this.callAPI()}>search</button>
          {
                   this.state.result.map((item)=>(
                       <div>
                           <h1>{item.title}</h1>
                           <a href={item.url}>Read here</a>
                           </div>
                   ))
               }
           </div>
        )
    }
}
export default ReactNews