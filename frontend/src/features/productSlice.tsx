import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../interfaces";
import { fetchPage } from "../api";

const initialState: ProductState = {
    items: { items: [], amountPages: 0 },
    mutatedItems: { items: [], amountPages: 0 },
    loading: false,
    error: ''
}

// handles all actions for cart
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterItems: (state, action: PayloadAction<string>) => {
            state.mutatedItems.items = state.items.items.filter(item => item.fruit.includes(action.payload))
        },
        sortItemsAscending: (state) => {
            state.mutatedItems.items = [...state.items.items].sort((a, b) => a.fruit.localeCompare(b.fruit))
        },
        sortItemsDescending: (state) => {
            state.mutatedItems.items = [...state.items.items].sort((a, b) => b.fruit.localeCompare(a.fruit))
        },
        sortItemsPriceAscending: (state) => {
            state.mutatedItems.items = [...state.items.items].sort((a, b) => a.price.localeCompare(b.price))
        },
        sortItemsPriceDescending: (state) => {
            state.mutatedItems.items = [...state.items.items].sort((a, b) => b.price.localeCompare(a.price))
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
            const response = await fetchPage(page)
            return response
        } catch (error) {
            throw error
        }
    }
);

// makes actions available for useSelection
export const { sortItemsAscending, sortItemsDescending, filterItems } = productSlice.actions

export default productSlice.reducer