import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink, useParams, useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../../app/SingleProductSlice/SingleProductSlice";
import {addToCart, findOrCreateCart, addToGuestCart} from '../../app/Cart/CartSlice'
import axios from "axios";

const SingleProduct = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.singleProduct.product)
    const user = useSelector((state) => state.auth.me)


    const order = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
        dispatch(findOrCreateCart(user.id))
    }, [])

    const navigate = useNavigate();
    //try and see if can load up the cart before even adding the cart

    //const {items, status } = useSelector(state)
    // console.log("orderId", order)

    const addToCartFunction = async(e) => {
        e.preventDefault();
        console.log("Order:", order)
        // dispatch(findOrCreateCart(user.id))
        dispatch(addToCart({productId: product.id, orderId: order.id}))
        // console.log('Product Id:', product.id)
        // console.log('State.me:', user)
        // console.log("Order:", order)
    }
    //one add to cart Fn, if logged in, run dispatch findOrCreateCart, otherwise run addToGuestCart
    //break through bugs
    //styling takes time

    const handleAddToGuestCart = (product) => {
        dispatch(addToGuestCart(product))
       // navigate("/cart");
    }


    console.log('State.me:', user)
    console.log("Order:", order)
    console.log("Product", product)
    return (
        <div className="singleProductContainer">
            <div><h1>{product.name}</h1></div>
            <div><img className="singleProductImage" src={product.image} /></div>
            <div><p>{product.desc}</p></div>
            <div><h3>{product.price}</h3></div>
            <button onClick={(e)=> addToCartFunction(e, product.id)}> Add to Cart</button>
            <button onClick={() => handleAddToGuestCart(product)}>Add to Guest Cart</button>
        </div>

    )
}
export default SingleProduct;