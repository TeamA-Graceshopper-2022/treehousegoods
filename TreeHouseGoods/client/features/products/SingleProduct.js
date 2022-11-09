import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../app/SingleProductSlice/SingleProductSlice";

const SingleProduct = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.singleProduct.product)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [])
    console.log("product", product)

    return (
        <h1>Single Product</h1>
    )
}

export default SingleProduct;