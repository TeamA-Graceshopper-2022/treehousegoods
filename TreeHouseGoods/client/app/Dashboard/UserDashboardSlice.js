import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    user:{},
    loading: false
}

export const oneUser = createAsyncThunk("oneUser", async(id) =>{
    try {
      const {data} = await axios.get(`/api/users/${id}`)
      return data;
    } catch(err) {
        next(err)
    }
})

export const updateUser = createAsyncThunk("updateUser", async({id, firstname, lastname, username, email, password, addressSt, addressApt, addressCity, addressState, addressZip})=>{
    try{
        const { data } = await axios.put(`/api/users/${id}`,{
            firstname, lastname, username, email, password, addressSt, addressApt, addressCity, addressState, addressZip
        })
        return data
    }catch(err){
        next(err)
    }
})

const userDashboardSlice = createSlice({
    name: 'userDashboard',
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(oneUser.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(oneUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload;
        }),
        builder.addCase(updateUser.fulfilled, (state,action)=>{
            return action.payload
        })
    }
});

export default userDashboardSlice.reducer;