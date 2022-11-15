import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchAllProducts, fetchProductsByCat, deleteProduct } from "../../app/AllProductsSlice/allProductsSlice";

const AdminProducts = () => {
    const products = useSelector((state) => state.products.products)
    let { category } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        category ? dispatch(fetchProductsByCat(category)) : dispatch(fetchAllProducts())
    }, [category])

    const clickDeleteHandler = (id) => {
        dispatch(deleteProduct(id));
    }

    return(
        <div><h1>Product Manager</h1>
        <div className="allProductsContainer">
            
            {products.map((product) => (
                <div className="allProducts" key={product.id}>
                    <div><Link to={`/admin/products/${product.id}`}><h3>{product.name}</h3></Link></div>
                    <div><Link to={`/admin/products/${product.id}`}><img className="allView" src={product.image}/></Link></div>
                    <div className="itemPrice">{product.price}</div>
                    <button type="button" id={product.id} onClick={async () => {
                        clickDeleteHandler(product.id)
                    }} className="deleteButton">
                        X
                    </button>
                </div>
            ))}
        </div>
        </div>

    )

}

export default AdminProducts;