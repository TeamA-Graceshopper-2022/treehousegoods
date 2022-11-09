import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    product: {},
    loading: false,
}
export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct', async (id) => {
    const { data } = await axios.get(`/api/products/${id}`)
    return data
})
const singleProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
    }
})
export default singleProductSlice.reducer