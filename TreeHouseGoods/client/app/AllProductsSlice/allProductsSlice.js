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

export const addProduct = createAsyncThunk('addProduct', async({ name, price, category, desc, image,imageAlt, inventory }) => {
    const { data } = await axios.post('/api/products', {
        name,
        price,
        category,
        desc,
        image,
        imageAlt,
        inventory
    });
    return data;
})

export const editProduct = createAsyncThunk('editProduct', async( {id, name, price, category, desc, image, imageAlt, inventory}) => {
    const { data } = await axios.put(`/api/products/${id}`, {
        name,
        price,
        category,
        desc,
        image,
        imageAlt,
        inventory
    });
    return data;
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id) =>{
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
})

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
        }),
        builder.addCase(addProduct.fulfilled,(state, action) => {
            state.products.push(action.payload)
        }),
        builder.addCase(editProduct.fulfilled, (state, action) => {
            return action.payload
        }),
        builder.addCase(deleteProduct.fulfilled, (state, action) =>{
            return {};
        })
    }
})
export default productsSlice.reducer