import { useState } from "react"
import ChildComponent from "./ChildComponent"
const ParentComponent=()=>{
    const [msg,setMsg]=useState("hru")
    const [uname,setName]=useState("user")
    const changeName=()=>{
        setName("john")
    }
    return(
        <div>
            {console.log("parent")}
            <h1>{uname}</h1>
        <button onClick={changeName}>ok</button>
        <ChildComponent msg={msg}></ChildComponent>
        </div>
    )
}
export default ParentComponent