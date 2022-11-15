import React from "react";
import { CartSummary } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToGuestCart} from '../../app/Cart/CartSlice'



// figure out what to pass into the reducers here or how to define item


const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const handleIncreaseQuantity = async(e) =>
  dispatch(increaseItemGuestCart(Item))

  const handleDecreaseQuantity = async(e) =>
  dispatch(decreaseItemGuestCart(Item))




  return (
    <div className="cart-container">
      {/* write a ternary conditional operator to show that if user doesn't have anything in cart, show a "nothing in cart page"  */}
      <h2>Cart Summary</h2>
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
                     <div className="cart-item-price">${cartItem.price}</div>
                     <div className ="item-amount">{cartItem.cartQuantity}</div>
                 
                </div>
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



{/**{//** 
                    <button onClick={() => addToGuestCart(cartItem)}>+</button>
                    <button onClick={() => handleDecreaseQuantity(cartItem)}>-</button>

                    increaseItemGuestCart, decreaseItemGuestCart, 
                 */} 