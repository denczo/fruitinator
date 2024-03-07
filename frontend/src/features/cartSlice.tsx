import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartState, Item } from "../interfaces";
import { fetchPage } from "../api";

const initialState: CartState = {
    items: { items: [], amountPages: 0 },
    loading: false,
    error: ''
}

// handles all actions for cart
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.items.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            state.items.items = state.items.items.filter(item => item.id != itemId);
        },
        sortItemsAscending: (state) => {
            state.items.items = [...state.items.items].sort((a, b) => a.fruit.localeCompare(b.fruit))
        },
        sortItemsDescending: (state) => {
            state.items.items = [...state.items.items].sort((a, b) => b.fruit.localeCompare(a.fruit))
        },
        sortItemsPriceAscending: (state) => {
            state.items.items = [...state.items.items].sort((a, b) => a.price.localeCompare(b.price))
        },
        sortItemsPriceDescending: (state) => {
            state.items.items = [...state.items.items].sort((a, b) => b.price.localeCompare(a.price))
        },
    },
    // only for async actions
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductPage.pending, (state) => {
                state.loading = true; // Set loading state to true when fetching starts
                state.error = "";   // Clear any previous errors
            })
            .addCase(fetchProductPage.fulfilled, (state, action) => {
                state.loading = false;      // Set loading state to false when fetching is done
                state.items = action.payload; // Update items array with fetched data
            })
            .addCase(fetchProductPage.rejected, (state, action) => {
                state.loading = false;       // Set loading state to false if fetching fails
                state.error = action.error.message as string; // Set error state with error message
            });
    }
})

// async fetch to receive all products of a certain page
export const fetchProductPage = createAsyncThunk(
    'products/fetchPage',
    async (page: number) => {
        try {
            const response = await fetchPage(page);
            return response;
        } catch (error) {
            throw error;
        }
    }
);

// makes actions available for useSelection
export const { addItem, removeItem, sortItemsAscending, sortItemsDescending } = cartSlice.actions

// makes state items available for useSelection
export const selectItems = (cart) => cart.items;

export default cartSlice.reducer; 