import React from "react";
import { Checkout } from "../"


const CartSummary = () => {
    return(
        <div>
            <div>
             <h1>Cart Summary</h1>
             <h3>Product</h3>
             <h3>Price</h3>
             <h3>Quantity</h3>
             <h3>Total</h3>
        </div>
       {/* <div className="cart-items">
            {Cart.cartItems &&
            cart.cartItems.map((cartItem)=> (
            <div className="cart-item" key={cartItem.id}>
               <h3>{cartItem.name}</h3>
             </div>
            )
        )}
            </div> */}

        <Checkout/>
       </div>
    )
}

export default CartSummary;