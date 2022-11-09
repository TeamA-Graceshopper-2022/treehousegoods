import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../app/AllProductsSlice/allProductsSlice";

const AllProducts = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    console.log(dispatch)

    return(
        <div>
            <h1>All Products Component</h1>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
        

    )

}

export default AllProducts;