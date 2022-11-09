import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../app/AllProductsSlice/allProductsSlice";

const AllProducts = () => {
    const products = useSelector((state) => state.products.products)
    const { name, price, image, id } = products
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    console.log(dispatch)

    return(
        <h1>All Products Component</h1>

    )

}

export default AllProducts;