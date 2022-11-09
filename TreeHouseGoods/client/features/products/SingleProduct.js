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

    return (
        <div className="singleProductContainer">
            <div><h1>{product.name}</h1></div>
            <div><img className="singleProductImage" src={product.image} /></div>
            <div><p>{product.desc}</p></div>
            <div><h3>{product.price}</h3></div>
        </div>
    )
}
export default SingleProduct;