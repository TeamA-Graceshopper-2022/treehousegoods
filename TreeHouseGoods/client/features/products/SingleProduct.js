import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../app/SingleProductSlice/SingleProductSlice";
import {addToCart} from '../../app/Cart/CartSlice'
import axios from "axios";

const SingleProduct = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.singleProduct.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [])

    const addToCartFunction = async(e) => {
        e.preventDefault();
        
        dispatch(addToCart(product.id))
        
    }

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