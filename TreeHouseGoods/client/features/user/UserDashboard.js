import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Orders } from "../";


const UserDashboard = () => {
    const user = useSelector((state) => state.auth.me)
    console.log("user", user)

    return(
        <div>
            <div>User Information</div>
            <Orders/>
            <div>Favorites</div>
        </div>
    )
}

export default UserDashboard;