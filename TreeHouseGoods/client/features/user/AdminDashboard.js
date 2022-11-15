import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../app/Dashboard/AdminDashboardSlice"

const AdminDashboard = () => {
    const users = useSelector((state) => state.adminDashboard.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userInfo())
    }, [])

    console.log("users", users)

    return(
        <div>
            <div><h2>Users Information</h2>
            {users.map((user) => (
                <div className="allUsers" key={user.id}>
                    <div><h4>{user.username}, {user.id}</h4></div>
                    {user.isAdmin ? (<p>Admin: Admin</p>) : (<p>Admin: Not an Admin</p>) }
                </div>
            ))}
            </div>
        </div>
    )
}

export default AdminDashboard;