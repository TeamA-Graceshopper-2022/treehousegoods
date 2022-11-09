import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                <Link key={product.id} to={`/products/${product.id}`}>
                <div className="allProducts" key={product.id}>{product.name}<img className="allView" src={product.image}/></div>
                </Link>
            ))}
        </div>
        

    )

}

export default AllProducts;