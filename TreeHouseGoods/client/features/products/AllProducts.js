import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllProducts, fetchProductsByCat } from "../../app/AllProductsSlice/allProductsSlice";


const AllProducts = () => {
    const products = useSelector((state) => state.products.products)
    let { category } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        category ? dispatch(fetchProductsByCat(category)) : dispatch(fetchAllProducts())
        console.log("Category:", category)
    }, [category])
    // console.log("Category:", category)

    const [query, setQuery] = useState("")
    const [searchParam] = useState(["name","desc"])
    const search = (products) => {
        return products.filter((product) => {
            return (
                searchParam.some((newProduct) => {
                    return (
                        product[newProduct]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    )
                })
            )
        })
    }

    return (
        <div>
            <div>
                <label><input type="search" name="search-form"
                    id="search-form"
                    value={query}
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                /></label>
            </div>
            <h1>All Products</h1>
            <div className="allProductsContainer">

                {search(products).map((product) => (
                    <div className="allProducts" key={product.id}>
                        <div><Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link></div>
                        <div><Link to={`/products/${product.id}`}><img className="allView" src={product.image} /></Link></div>
                        <div className="itemPrice">{product.price}</div>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default AllProducts;