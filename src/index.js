import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import userReducer from "./reducers/userReducer"
const centralState=configureStore(
    {
        reducer:{
            user:userReducer
        }
    }
)
ReactDOM.render(
<Provider store={centralState}>
<div>
<App></App>
</div>
</Provider>,document.getElementById("root"))


