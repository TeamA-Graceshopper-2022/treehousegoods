import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const getOrders = createAsyncThunk("getOrders", async(id) =>{ 
    try {
      const {data} = await axios.get(`/api/orders/history/${id}`)
      return data;
    } catch(err) {
        next(err)
    }
})

const initialState= {
    orders: []
};


const ordersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        })
    }
});
export default ordersSlice.reducer;