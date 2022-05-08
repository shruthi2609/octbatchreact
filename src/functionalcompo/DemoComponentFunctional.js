import { useState } from "react"
const DemoFunctional=(props)=>{
const [count,setCount]=useState("")
const [uname,setUname]=useState("")
const handleChange=(e)=>{
setUname(e.target.value)
}
return(
    <div>
        <form>
            <input type="text" onChange={(e)=>handleChange(e)}></input>
            <button>submit</button>
        </form>
        <h3>{uname}</h3>
    </div>
)
}
export default DemoFunctional