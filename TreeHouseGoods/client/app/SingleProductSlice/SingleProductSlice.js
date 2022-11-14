import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    product: {},
    loading: false,
    status: null,
    error: null,
}
export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct', async (id, {rejectWithValue}) => {
    try{
    const { data } = await axios.get(`/api/products/${id}`)
    return data
    } catch(error) {
        return rejectWithValue(error.response.data)
    }
})
const singleProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.pending, (state, action) => {
            state.loading = true
            state.status = "pending"
        }),
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
            state.status = "success"
        }),
        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.loading = false
            state.status = "rejected"
            state.error = action.payload
        })
    }
})

export default singleProductSlice.reducer