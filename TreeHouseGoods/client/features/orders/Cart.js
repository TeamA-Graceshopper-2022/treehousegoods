import React from "react";
import { CartSummary } from '../index'

const Cart = () => {
    return (
        <div>
            {/* write a ternary conditional operator to show that if user doesn't have anything in cart, show a "nothing in cart page"  */}
        <h1>In Cart</h1>
        <CartSummary/>
        </div>
    )
}

export default Cart;