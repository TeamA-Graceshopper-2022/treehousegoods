import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../app/Dashboard/UserDashboardSlice";

const UpdateForm = () => {
    const user = useSelector((state) => state.auth.me)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = user;

    const [firstname, setFirstName] = useState(user.firstname)
    const [lastname, setLastName] = useState(user.lastname)
    const [username, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [addressSt, setAddress] = useState(user.addressSt)
    const [addressApt, setApt] = useState(user.addressApt)
    const [addressCity, setCity] = useState(user.addressCity)
    const [addressState, setState] = useState(user.addressState)
    const [addressZip, setZip] = useState(user.addressZip)

    async function update(){
        dispatch(updateUser({
            id,firstname, lastname, username, email, password, addressSt, addressApt, addressCity, addressState, addressZip
        }))
        navigate('/user')
    }

    return(
        <div className="updateForm">
            <form onSubmit={update}>
            <label><small>First Name:</small></label>
                <input name="first" value={firstname} type="text" onChange={(evt) => setFirstName(evt.target.value)} />

                <label><small>Last Name:</small></label>
                <input name="last" value={lastname} type="text" onChange={(evt) => setLastName(evt.target.value)} />

                <label><small>Username:</small></label>
                <input name="username" value={username} type="text" onChange={(evt) => setUserName(evt.target.value)} />

                <label><small>Email:</small></label>
                <input name="email" value={email} type="text" onChange={(evt) => setEmail(evt.target.value)} />

                <label><small>Password:</small></label>
                <input type="password"name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />

                <label><small>Address:</small></label>
                <input name="address" value={addressSt} type="text" onChange={(evt) => setAddress(evt.target.value)} />

                <label><small>Apt:</small></label>
                <input name="apt" value={addressApt} type="text" onChange={(evt) => setApt(evt.target.value)} />

                <label><small>City:</small></label>
                <input name="city" value={addressCity} type="text" onChange={(evt) => setCity(evt.target.value)} />

                <label><small>State:</small></label>
                <input name="state" value={addressState} type="text" onChange={(evt) => setState(evt.target.value)} />

                <label><small>Zip Code:</small></label>
                <input name="zip" value={addressZip} type="text" onChange={(evt) => setZip(evt.target.value)} />
                <button type="submit" className="signButton">Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm