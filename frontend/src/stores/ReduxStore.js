import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPage } from '../api';


// handles all actions for favorites
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.favorites = state.favorites.filter(item => item.id != itemId);
    }
  }
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    
  }

})

// handles all actions for cart
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false, // Add loading state to track fetching state
    error: null,  
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id != itemId);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductPage.pending, (state) => {
        state.loading = true; // Set loading state to true when fetching starts
        state.error = null;   // Clear any previous errors
      })
      .addCase(fetchProductPage.fulfilled, (state, action) => {
        state.loading = false;      // Set loading state to false when fetching is done
        state.items = action.payload; // Update items array with fetched data
      })
      .addCase(fetchProductPage.rejected, (state, action) => {
        state.loading = false;       // Set loading state to false if fetching fails
        state.error = action.error.message; // Set error state with error message
      });
  }
})

// async fetch to receive all products of a certain page
export const fetchProductPage = createAsyncThunk(
  'products/fetchPage',
  async (page) => {
    try {
      const response = await fetchPage(page);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

// makes actions available for useSelection
export const { addItem, removeItem } = cartSlice.actions

// makes state items available for useSelection
export const selectItems = (cart) => cart.items;

// makes reducer available for the provider in App.js
export default configureStore({
  reducer: cartSlice.reducer,
})