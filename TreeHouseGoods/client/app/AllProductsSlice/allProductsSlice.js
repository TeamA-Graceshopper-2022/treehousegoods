import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    products: [],
    loading: false,
}
export const fetchAllProducts = createAsyncThunk('fetchAllProducts', async () => {
    const { data } = await axios.get('/api/products')
    return data
})

export const fetchProductsByCat = createAsyncThunk('fetchProductsByCat', async (category) => {
    const { data } = await axios.get(`/api/products/cat/${category}`)
    return data
} )

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        }),
        builder.addCase(fetchProductsByCat.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(fetchProductsByCat.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
    }
})
export default productsSlice.reducer