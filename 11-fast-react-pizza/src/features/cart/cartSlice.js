import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // cart: [],
    cart:[
        {
            pizzaId: 12,
            name: "Mediterranean",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
        },
        {
            pizzaId: 6,
            name: "Vegetale",
            quantity: 1,
            unitPrice: 13,
            totalPrice: 13,
        },
        {
            pizzaId: 11,
            name: "Spinach and Mushroom",
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
        }
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state,action){
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state,action){
            //payload = pizzaId
            state.cart = state.cart.filter((item)=>item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state,action){
            //payload = pizzaId
            const item = state.cart.find((item)=>item.pizzaId === action.payload);

            if(item){
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseItemQuantity(state,action){
            //payload = pizzaId
            const item = state.cart.find((item)=>item.pizzaId === action.payload);

            if(item){
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        clearCart(state,action){
            state.cart = [];
        }
    }
})


export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

export const getCartTotalQuantity = (state)=>state.cart.cart.reduce((acc,item)=>acc + item.quantity,0);

export const getCartTotalPrice = (state)=>state.cart.cart.reduce((acc,item)=>acc + item.totalPrice,0);

export const getCart = (state)=>state.cart.cart;

export const getEachItemQuantityById = (id)=>state=>state.cart.cart.find((item)=>item.pizzaId === id)?.quantity??0;