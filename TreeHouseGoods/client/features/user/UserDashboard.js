import React from "react";
import { Orders } from "../";

const UserDashboard = () => {
    return(
        <div>
            <div>User Information</div>
            <Orders/>
            <div>Favorites</div>
        </div>
    )
}

export default UserDashboard;