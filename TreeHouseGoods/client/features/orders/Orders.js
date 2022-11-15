import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from '../../app/OrdersSlice/Orders'
import axios from "axios";

const Orders = () => {
    const orders = useSelector((state) => state.orders.orders)
    const user = useSelector((state) => state.auth.me)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrders(user.id))
    }, [])

    function getTotal(array) {
        let priceVals = []
        array.map((product) => {priceVals.push(product.price)})
        console.log(priceVals)
        let sum = priceVals.reduce((previousValue, currentValue) => {previousValue + currentValue});
        return sum
    }

    function getDate(aStr) {
        let date = aStr.slice(0, 10)
        return date
    }

    return(
    <div className="orderHistory">
        <h1>Order History</h1>
        <div className="orderHistoryTitles">
            <h3 className="product-header">Order Number</h3>
            <h3 className="date-header">Date</h3>
            <h3 className="total-header">Total</h3>
        </div>
     {orders.map((order) => (
        <div className="order" key={order.id}>
            <div className="orderId">{order.id}</div>
            <div className="orderDate">{getDate(order.updatedAt)}</div>
            <div className="orderDate">${getTotal(order.products)}</div>
            
        </div>
      ))}

    </div>
)
}

export default Orders;