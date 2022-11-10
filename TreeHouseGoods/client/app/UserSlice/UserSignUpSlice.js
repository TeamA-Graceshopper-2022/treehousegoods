import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = [];

export const postUser = createAsyncThunk("registerUser", async (payload) => {
    try{
        const { data } = await axios.post(`/api/users`, payload)
        console.log("post",data)
        return data
    } catch (err){
        console.log(err)
        next(err)
    }
})

const userSlice = createSlice({
    name:"newUser",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(postUser.fulfilled, (state, action)=> {
            state.push(action.payload)
        })
    }
})

export default userSlice.reducer;