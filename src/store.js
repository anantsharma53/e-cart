// Store manages data and reducers.

import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./reducers/cartReducer";


const store = configureStore({
    reducer:{
        cartItems:cartReducer   
    }
});


export default store;