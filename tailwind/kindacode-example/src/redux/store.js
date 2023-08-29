import {configureStore} from "@reduxjs/toolkit"; // sd cai nay, ko can su dung middleware nua
import tradeReducer from "./blog/blogSlice";
import userReducer from "./user/userSlice"

export  const store = configureStore({
    reducer: {
        blogs:tradeReducer,
        user : userReducer
    }
});