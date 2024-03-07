import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice.tsx';
import productReducer from '../features/productSlice.tsx';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

// makes reducer available for the provider in App.js
export const store = configureStore({
  reducer: rootReducer
})

// type for useDispatch
export type AppDispatch = typeof store.dispatch;
// type for useSelector
export type RootState = ReturnType<typeof rootReducer>;