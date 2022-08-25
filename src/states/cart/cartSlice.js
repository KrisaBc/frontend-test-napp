import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductsToCart } from './fetches';

const initialState = {
    cartTotalProducts: 0,
    isCartTotalProductsLoading: true,
}

export const sendProductsToCart = createAsyncThunk(
    'cart/sendProductsToCart',
    async ({ id, colorCode, storageCode }) => {

        const response = await fetchProductsToCart({ id, colorCode, storageCode })
        return (response.json())
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(sendProductsToCart.pending, (state) => {
                state.isCartTotalProductsLoading = true
            })
            .addCase(sendProductsToCart.fulfilled, (state, action) => {
                state.cartTotalProducts += action.payload.count
                state.isCartTotalProductsLoading = false
            })
            .addCase(sendProductsToCart.rejected, (state, action) => {
                state.cartTotalProducts = action.payload
                state.isCartTotalProductsLoading = false
            })
    },
})

export const { incrementProductsInCart } = cartSlice.actions

export default cartSlice.reducer

