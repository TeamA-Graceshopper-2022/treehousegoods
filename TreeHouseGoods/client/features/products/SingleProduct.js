import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../app/SingleProductSlice/SingleProductSlice";
import {addToCart, findOrCreateCart} from '../../app/Cart/CartSlice'
import axios from "axios";

const SingleProduct = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.singleProduct.product)
    const user = useSelector((state) => state.auth.me)
    const order = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
        
    }, [])

    const addToCartFunction = async(e) => {
        e.preventDefault();
        
        dispatch(findOrCreateCart(user.id))
        dispatch(addToCart(product.id, 3))
        console.log('Product Id:', product.id)
        console.log('State.me:', user)
        // console.log("Order:", order)
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
        </div>

    )
}
export default SingleProduct;