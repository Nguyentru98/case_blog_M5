import {createSlice} from "@reduxjs/toolkit";
import {getBlog} from "../../service/blogSevice";

const initialState ={
    blogs:[]
}
const  blogSlice= createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getBlog.fulfilled,(state,action) => {
            state.blogs = action.payload
        })
    }

})
export  default  blogSlice.reducer;