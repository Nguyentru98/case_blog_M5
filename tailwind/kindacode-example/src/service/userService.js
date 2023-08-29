import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export  const login = createAsyncThunk(
    "user/login",
    async (data)=>{
        const res= await axios.post('http://localhost:3001/user/login',data);
        console.log('login',res)
        return res;
    }
);