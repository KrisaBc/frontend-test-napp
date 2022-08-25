import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from './fetches';

const initialState = {
    products: [],
    isProductsLoading: true,
    productDetail: null,
    isProductDetailLoading: true,
    searchedProducts: '',
}

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const response = await fetchProducts()
        return (response.json())
    }
)

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id) => {
        const response = await fetchProductById(id)
        return (response.json())
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        searchedProductsChanged: (state, action) => {
            state.searchedProducts = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isProductsLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.isProductsLoading = false
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.products = action.payload
                state.isProductsLoading = false
            })
            .addCase(getProductById.pending, (state) => {
                state.isProductDetailLoading = true
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.productDetail = action.payload
                state.isProductDetailLoading = false
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.productDetail = action.payload
                state.isProductDetailLoading = false
            })
    },
})

export const { searchedProductsChanged } = productSlice.actions

export default productSlice.reducer

