import {createSlice, createAsyncThunk, createNextState} from "@reduxjs/toolkit"
import axios from 'axios'


export const addToCart = createAsyncThunk("addToCart", async(productId) =>{
    try { /* post to order product table, + get order id*/
      const {data} = await axios.post(`/api/order/:id`)
      return data;

    } catch(err) {
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
        })
    }
})

export default cartSlice.reducer;