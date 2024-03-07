import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState, Item, } from "../interfaces";
import { extractPrice } from "../utils.ts";

const initialState: CartState = {
    items: [],
    loading: false,
    error: '',
    totalAmount: 0
}

// handles all actions for cart
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            const index = state.items.findIndex(item => item.item.fruit === action.payload.fruit)
            const price = extractPrice(action.payload.price)
            state.totalAmount += 1
            if(index === -1){
                state.items.push({item: action.payload, amount: 1, totalPrice: price});
            }else{
                const {amount, totalPrice} = state.items[index]
                const newArray = [...state.items];
                newArray[index] = {item: action.payload, amount: amount + 1, totalPrice: totalPrice + price}
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            // const itemId = action.payload;
            // state.items = state.items.filter(item => item.f != itemId);
        },
    },
})


// makes actions available for useSelection
export const { addItem, removeItem } = cartSlice.actions

// makes state items available for useSelection
// export const selectItems = (cart) => cart.items;

export default cartSlice.reducer; 