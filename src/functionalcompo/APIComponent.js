import { useEffect, useState } from "react"
import axios from "axios"
const APIComponent=(props)=>{
    const [search,setSearch]=useState("")
    const [result,setResult]=useState([])
    useEffect(
       ()=>{ 
           console.log("use effect")
           axios.get("https://hn.algolia.com/api/v1/search?query="+search).then((res)=>setResult(res.data.hits)).catch((err)=>console.log(err))
          return ()=>setResult([])// will run in unmount
        }
    ,[result])
    const handleSearchText=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    /* const callAPI=()=>{
        axios.get("https://hn.algolia.com/api/v1/search?query="+search).then((res)=>setResult(res.data.hits)).catch((err)=>console.log(err))
       
        axios.post("api",{username:"john@gmail.com"})
         
    }*/
    return(
        <div>
            <h2>{props.prop1}</h2>
            {console.log("render")}
        <h1>NewsApp</h1>
        <form>
            <input type="text" onChange={(e)=>handleSearchText(e)}></input>
        </form>
     { /*  <button onClick={()=>callAPI()}>search</button>*/}
   {
           result.map((item)=>(
                <div>
                    <h1>{item.title}</h1>
                    <a href={item.url}>Read here</a>
                    </div>
            ))
        }
    </div>
    )
}
export default APIComponent;