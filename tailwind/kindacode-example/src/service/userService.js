import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export  const login = createAsyncThunk(
    "user/login",
    async (data)=>{
        const res= await axios.post('http://localhost:3001/user/login',data);
        return res;
    }
);
export const register = createAsyncThunk(
    'user/register',
    async (data) =>{
        const res = await axios.post('http://localhost:3001/user/register', data);
        return res.data

    })