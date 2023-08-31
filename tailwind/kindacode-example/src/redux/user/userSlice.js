import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState ={
    user:  JSON.parse(localStorage.getItem('user'))
}
const  tradeSlice= createSlice({
    name: "currentUser",
    initialState,
    extraReducers: builder =>{
        builder.addCase(login.fulfilled,(state,action) => {
            state.currentUser = action.payload.data
            console.log("currentUser",state.currentUser)
            localStorage.setItem('user', JSON.stringify(action.payload.data))
        })
    }

})
export  default  tradeSlice.reducer;