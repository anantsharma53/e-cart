import {createSlice} from "@reduxjs/toolkit";
// 1. To have initial data.
// initially there are no items in the cart.
const initialState ={
     value: []
}
// 2. Create the reducer.
// use createSlice function.
const cartSlice = createSlice({
    
    name:"cartItems",
    initialState,
    reducers:{
        // define actions.
        add:(state, action)=>{
             state.value.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            const filteredCart = state.value.filter((item) => item.id !== action.payload.item.id);
                //console.log(filteredCart);
                console.log(action.payload)
                state.value=filteredCart;
            
        },
        
    }
});
// exporting actions for components to call.
export const { add, removeFromCart} = cartSlice.actions;
// selector to select cart data.
export const cartSelector = (state)=> state.cartItems.value;
export default cartSlice.reducer;

