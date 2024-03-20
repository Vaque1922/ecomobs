import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
const store=configureStore({

    reducer:{
        addtocart:productReducer,
    }
});

export default store;