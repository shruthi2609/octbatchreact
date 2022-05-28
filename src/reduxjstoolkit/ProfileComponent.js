import React from "react";
import { useSelector } from "react-redux";
export default function ProfileComponent(){
  const res=useSelector((state)=>state.user.value1)
  const res2=useSelector((state)=>state.user.value2)
  return(
      <div>
          {console.log(res2)}
          <h1>Profile Details</h1>
          <h2>{res.role}</h2>
          <h2>{res.username}</h2>
        
      </div>
  )
}
