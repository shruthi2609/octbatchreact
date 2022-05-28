import { useDispatch } from "react-redux"
import {login,logout} from "../reducers/userReducer"
export default function LoginComponent(){
   const dispatch= useDispatch()
    const loginFun=()=>{
        dispatch(login({username:"john@gmail.com",role:"trainer"}))
    }
    const logoutfun=()=>{
        dispatch(logout())
    }
    return(
        <div>
        <button onClick={loginFun}>login</button>
        <button onClick={logoutfun}>logout</button>
        </div>
    )
}