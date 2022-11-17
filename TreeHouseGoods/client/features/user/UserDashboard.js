import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Orders } from "../";
import { oneUser } from "../../app/Dashboard/UserDashboardSlice";

const UserDashboard = () => {
    const user = useSelector((state) => state.auth.me)
    console.log("user", user)

    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(oneUser(id))
    })

    return(
        <div>
            <div className="userinfoDiv">
                <h1>User Information</h1>
                <a href={`/updateform`}><button className="signButton">Update information</button></a>
                <ul className="userinfoList">
                <li>Name: {user.firstname} {user.lastname}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Address: {user.addressSt} {user.addressCity} {user.addressState} {user.addressZip}</li>
                </ul>
            </div>

            <Orders/>
        </div>
    )
}

export default UserDashboard;