import {createSlice, createAsyncThunk, createNextState} from "@reduxjs/toolkit"
import axios from 'axios'


export const addToCart = createAsyncThunk("addToCart", async() =>{
    try { /* post to order product table, + get order id*/
      const {data} = await axios.post(`/api/orders/cart`)
      return data;

    } catch(err) {
        next(err)

    }
})

export const findOrCreateCart = createAsyncThunk("findOrCreateCart", async(id) => {
    try{
        const { data } = await axios.post(`/api/users/${id}/cart`)
        return data;
    } catch (err) {
        next(err)
    }
})


const initialState=[];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(addToCart.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(findOrCreateCart.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default cartSlice.reducer;