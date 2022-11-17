import {createSlice, createAsyncThunk, createNextState} from "@reduxjs/toolkit"
import axios from 'axios'


export const addToCart = createAsyncThunk("addToCart", async({productId, orderId}) =>{ //(payload, thunk options)
    try { /* post to order product table, + get order id*/
      const {data} = await axios.post(`/api/orders/order_products`, {productId: productId, orderId: orderId})
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

export const getOrderProducts = createAsyncThunk("getOrderProducts", async(id) => {
    try{
        const { data } = await axios.get(`http://localhost:8080/api/orders/${id}`)
        return data;
    } catch(err) {
        next(err)
    }
})

const initialState= {
    cartItems: localStorage.getItem("cartGuestItems") ? JSON.parse(localStorage.getItem("cartGuestItems")) : [],  //checking if cart items are in local storage, if have we add, else we add it as an empty array
    cartTotalQuantity:0,
    cartTotalAmount: 0,
    order: []
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
         clearGuestCart(state,action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
         },

        // return those items in array that without the item with the id that matches
        removeFromGuestCart(state, action) {
            const newCart = state.cartItems.filter(
                cartItem => cartItem.id != action.payload.id
            )
            state.cartItems = newCart;
        },
     
       increaseItemGuestCart(state, action){
            // +1 to cart quantity
            const itemIndex = state.cartItems.findIndex(
                item => item.id === action.payload.id  // we are using findIndex to check if the cart items already has the cart item we want to add. If true,  we have items in cart
            
            ); 
            state.cartItems[itemIndex].cartQuantity += 1

        },
        decreaseItemGuestCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
                state.cartItems[itemIndex].cartQuantity -= 1
             
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(addToCart.fulfilled, (state, action) => {
            return action.payload;
        }),
        builder.addCase(findOrCreateCart.fulfilled, (state, action) => {
            return action.payload[0]
        }),
        builder.addCase(getOrderProducts.fulfilled, (state, action) => {
            state.order = action.payload
        })
    },
});
export const { addToGuestCart, removeFromGuestCart, increaseItemGuestCart, decreaseItemGuestCart, clearGuestCart } = cartSlice.actions; // this will be our action creator
export default cartSlice.reducer;