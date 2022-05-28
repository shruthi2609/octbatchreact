import { createSlice } from "@reduxjs/toolkit";
const initialValue={username:"dummy@gmail.com",role:"admin"}
const userSlice=createSlice({
    name:"user",
    initialState:{value1:initialValue,value2:"dummy"},
    reducers:{
        login:(state,action)=>{
            state.value1=action.payload
        },
        logout:(state,action)=>{
            state.value1=initialValue
        }
    }
})
export const {login,logout}=userSlice.actions
export default userSlice.reducer