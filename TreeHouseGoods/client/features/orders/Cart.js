import React from "react";
import { CartSummary } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseItemGuestCart, decreaseItemGuestCart} from '../../app/Cart/CartSlice'






const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const handleIncreaseQuantity = async(e) =>
  dispatch(increaseItemGuestCart(cartItem.cartQuantity))

  const handleDecreaseQuantity = async(e) =>
  dispatch(decreaseItemGuestCart(cartItem.cartQuantity))




  return (
    <div>
      {/* write a ternary conditional operator to show that if user doesn't have anything in cart, show a "nothing in cart page"  */}
      <h2>In Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">Start Shopping </Link>
            </div>
          </div>
        
      ) : (

        <div>
            <div className = "cartHeaders">
             <h1>Cart Summary</h1>
             <h3>Product</h3>
             <h3>Price</h3>
             <h3>Quantity</h3>
             <h3>Total</h3>
            </div>
            <div className="cart-items">
            {cart.cartItems &&
            cart.cartItems.map((cartItem)=> (
                <div className="cart-item" key={cartItem.id}>
                <h3>{cartItem.name}</h3>
                <img src={cartItem.image}/>
                <button onClick={() => handleIncreaseQuantity(cartItem.cartQuantity)}>+</button>
                <button onClick={() => handleDecreaseQuantity(cartItem.cartQuantity)}>-</button>

                </div>
                )
            )}
            </div> 
       {/**<CartSummary /> */}
      </div>
      )}
  </div>
)};

export default Cart;
