import { useEffect, useState } from "react"
import React from "react"
const EffectComponent=(props)=>{
    const [msg,setMsg]=useState("")
    const [uname,setName]=useState("john")
    useEffect(
        ()=>{
        console.log("use effect called")
        setMsg(props.prop1)
        }
    ,[props.prop1,uname])
    
    const changeMsg=()=>{
        setName("peter")
    }
    return(
   
        <div>
          { console.log("render")}
           <h1>{uname}</h1>
           <h3>{props.prop2}</h3>
            <h2>{msg}</h2>
            <button onClick={changeMsg}>change</button>
        </div>
    )
}
export default React.memo(EffectComponent)