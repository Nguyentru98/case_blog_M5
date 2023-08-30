import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";

export  const getBlog = createAsyncThunk(
    "blog/getBlog",
    async ()=>{
        const res= await axios.get('http://localhost:3001/blog');
        return res.data;
    }
);
export const addBlog = createAsyncThunk(
    'blogs/addBlog',
    async (data) => {
        const res = await customAxios.post('http://localhost:3001/blog', data);
        console.log(data)
        return data
    }
)
export const deleteBlogs = createAsyncThunk(
    'blogs/deleteBlogs',
    async (id) =>{
        const res  = await axios.delete(`http://localhost:3001/blog/${id}`)
        return res
    }
)
export const blogDetail = createAsyncThunk(
    'blogs/blogDetail',
    async (id) =>{
        const res  = await axios.get(`http://localhost:3001/blog/${id}`)
        return res
    }
)
export const updateBlog = createAsyncThunk(
    'blogs/updateBlog',
    async (data) =>{
        const res  = await axios.put(`http://localhost:3001/blog/${data.id}`, data.postData)
        return res
    }
)