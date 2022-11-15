import React from "react";
import { Checkout } from "../"
//import { cart } from "../"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToGuestCart, removeFromGuestCart} from '../../app/Cart/CartSlice'
import axios from "axios";
    


const CartSummary = () => {
    
    
    // figure out what to pass into the reducers here or how to define item
    
    
    
      const cart = useSelector((state) => state.cart);
      const dispatch = useDispatch()
    
    
      const handleRemoveFromGuestCart = async(product) => {
      dispatch(removeFromGuestCart(product))
    }
    
      return (
      <div>
        <div className = "cartHeaders">
         <h3 className ="product-header">Product</h3>
         <h3 className ="price-header">Price</h3>
         <h3 className ="quantity-header">Quantity</h3>
         <h3 className ="total-header">Total</h3>
        </div>
        <div className="cart-items">
        {cart.cartItems &&
        cart.cartItems.map((cartItem)=> (
            <div className="cart-item" key={cartItem.id}>
                <div className='cart-product'>
                 <h3>{cartItem.name}</h3>
                 <img src={cartItem.image}/>
                 <p>{cart.desc}</p>
                 <button onClick={() => handleRemoveFromGuestCart(cartItem)}>Remove</button> 
                </div>
     
                 <div className="cart-item-price">${cartItem.price}</div>
                 <div className ="item-amount">{cartItem.cartQuantity}</div>
            </div>
        ))}         
        </div>
    </div>
  )
}
            
           

export default CartSummary;