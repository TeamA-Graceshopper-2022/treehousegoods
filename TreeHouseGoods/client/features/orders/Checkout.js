import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { clearGuestCart } from "../../app/Cart/CartSlice";


const Checkout = () => {
    
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    
    useEffect(() => {
        dispatch(clearGuestCart());
    }, [dispatch]);
    
  
    return(
        <div>
            <h1> Checkout Successful</h1>
           
            <div>Shipping Information</div>
            <div>Payment Method</div>
        </div>
    )
}

export default Checkout;