import React from "react";
import { CartSummary } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToGuestCart,
  removeFromGuestCart,
  increaseItemGuestCart,
  decreaseItemGuestCart,
} from "../../app/Cart/CartSlice";
import axios from "axios";
import { me } from "../../app/store"

// figure out what to pass into the reducers here or how to define item

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const handleIncreaseQuantity = async (cartItem) =>
    dispatch(increaseItemGuestCart(cartItem));

  const handleDecreaseQuantity = async (cartItem) =>
    dispatch(decreaseItemGuestCart(cartItem));

  const handleRemoveFromGuestCart = async (product) => {
    dispatch(removeFromGuestCart(product));
  };

  return (
    <div className="cart-container">
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
          <div className="cartHeaders">
            <h3 className="product-header">Product</h3>
            <h3 className="price-header">Price</h3>
            <h3 className="quantity-header">Quantity</h3>
            <h3 className="total-header">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <h3>{cartItem.name}</h3>
                    <img src={cartItem.image} />
                    <p>{cart.desc}</p>
                    <button onClick={() => handleRemoveFromGuestCart(cartItem)}>
                      Remove
                    </button>
                    <button onClick={() => handleIncreaseQuantity(cartItem)}>
                      +
                    </button>
                    <button onClick={() => handleDecreaseQuantity(cartItem)}>
                      -
                    </button>
                  </div>

                  <div className="cart-item-price">${cartItem.price}</div>
                  <div className="item-amount">{cartItem.cartQuantity}</div>
                </div>
              ))}
          </div>
          <CartSummary />

          <h3>Ready to Checkout?</h3>

          {isLoggedIn ? (
            <button onClick={() => navigate("/checkout")}> Checkout Here! </button>
          ) : (
            <button onClick={() => navigate("/login")}> Login to start Checkout </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
