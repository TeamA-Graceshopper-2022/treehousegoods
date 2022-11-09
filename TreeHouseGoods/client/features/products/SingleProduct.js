import React from "react";

const SingleProduct = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.product.product)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchsingleProduct())
    }, [])
    console.log(dispatch)

    return (
        <h1>Single Product</h1>
    )
}

export default SingleProduct;