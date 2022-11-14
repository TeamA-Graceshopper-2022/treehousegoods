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


const initialState= {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],  //checking if cart items are in local storage, if have we add, else we add it as an empty array
    cartTotalQuantity:0,
    cartTotalAmount: 0,

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // generate action create and handle the state for that action creator
        addToGuestCart(state, action){
            
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id  // we are using findIndex to check if the cart items already has the cart item we want to add. If true,  we have items in cart
            ); 
            // use this to push item to cart or incrememnt quantity

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {

            // action.payload is product coming from action creator on single product guest button
            // create a varable so that we can pass in cartQuantity as well

            const tempProduct = {...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProduct) 
           }
         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(addToCart.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(findOrCreateCart.fulfilled, (state, action) => {
            return action.payload
        })
    },
});
export const { addToGuestCart } = cartSlice.actions; // this will be our action creator
export default cartSlice.reducer;