import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from './fetches';
import { STOREEXPIRED } from '../../config/config'

const initialState = {
    products: [],
    isProductsLoading: true,
    productDetail: null,
    isProductDetailLoading: true,
    searchedProducts: '',
    loadedAt: 0,
}

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (_, { getState }) => {
        const state = getState()
        const expiredTime = state.product.loadedAt + STOREEXPIRED

        if (Date.now() >= expiredTime) {
            const response = await fetchProducts()
            if (response.ok) {
                const resjson = await response.json()
                return ({ products: resjson, loadedAt: Date.now() })
            } else {
                return ({ products: [], loadedAt: 0 })
            }
        }
        return ({ products: state.product.products, loadedAt: state.product.loadedAt })
    }
)

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id) => {
        const response = await fetchProductById(id)
        if (response.ok) {
            return response.json()
        } else {
            return null
        }
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
                state.products = action.payload.products
                state.loadedAt = action.payload.loadedAt
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

