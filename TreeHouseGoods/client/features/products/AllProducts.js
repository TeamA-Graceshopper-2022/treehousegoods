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

    return(
        <div><h1>All Products</h1>
        <div className="allProductsContainer">
            
            {products.map((product) => (
                <div className="allProducts" key={product.id}>
                    <div><Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link></div>
                    <div><Link to={`/products/${product.id}`}><img className="allView" src={product.image}/></Link></div>
                    <div className="itemPrice">{product.price}</div>
                </div>
            ))}
        </div>
        </div>

    )

}

export default AllProducts;