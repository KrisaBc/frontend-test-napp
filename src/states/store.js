import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';
import { save, load } from "redux-localstorage-simple"

const persists = [
  'product',
  'cart'
]

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save({ states: persists })),
  preloadedState: load({ states: persists })
});
