import React from "react"
const ChildComponent=React.memo((props)=>{
 
    return(
        <div>
             {console.log("child")}
            <h1>You have got a new message!{props.msg}</h1>
        </div>
    )
})
export default ChildComponent