import {createSlice} from "@reduxjs/toolkit";
// 1. To have initial data.
// initially there are no items in the cart.
const initialState ={
     value: [],
     totalQuantity: 0,
}
// 2. Create the reducer.
// use createSlice function.
const cartSlice = createSlice({
    
    name:"cartItems",
    initialState,
    reducers:{
        // define actions.
        
        add: (state, action)=>{
            const itemIndex = state.value.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >=0){
                state.value[itemIndex].quantity += 1;
                console.log(state.value[itemIndex].quantity);
            }
            else{
                const tempProduct = {...action.payload, quantity: 1};
                console.log(tempProduct);
                state.value.push(tempProduct); 
            }
                       
        },
        removeFromCart:(state,action)=>{
            const filteredCart = state.value.filter((item) => item.id !== action.payload);
                //console.log(filteredCart);
                console.log(action.payload)
                state.value=filteredCart;
            
        },
        // getTotal: (state)=>{

        //     const {price, quantity} = state.value.reduce((cartTotal,currentItem)=>{
        //        const {price,quantity} = currentItem;
        //        const itemTotal = price * quantity;

        //        cartTotal.price += itemTotal;
        //        cartTotal.quantity += quantity;

        //        return cartTotal;
        //     },
        //     {
        //         price: 0,
        //         quantity: 0
        //     });

        //     state.totalQuantity = quantity;
        //     state.totalPrice = parseFloat(price.toFixed(2));;
        // }
        
        },
        
        
    
});
// exporting actions for components to call.
export const { add, removeFromCart,addSameItem} = cartSlice.actions;
// selector to select cart data.
export const cartSelector = (state)=> state.cartItems.value;
export default cartSlice.reducer;

