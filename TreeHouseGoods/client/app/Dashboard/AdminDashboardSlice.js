import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


export const userInfo = createAsyncThunk("userInfo", async() =>{
    try {
      const {data} = await axios.get('/api/users/')
      console.log(data)
      return data;
    } catch(err) {
        next(err)
    }
})

const initialState= {
   users: [],
   loading: false,
};


const adminDashboardSlice = createSlice({
    name: 'adminDashboard',
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(userInfo.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(userInfo.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload;
        })
    }
});

export default adminDashboardSlice.reducer;