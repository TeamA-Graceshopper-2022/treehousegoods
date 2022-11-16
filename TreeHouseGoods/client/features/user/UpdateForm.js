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
        <div className="updateUserForm">
            <form onSubmit={update}>
            <label >First Name:</label>
                <input name="first" value={firstname} onChange={(evt) => setFirstName(evt.target.value)} />

                <label  >Last Name:</label>
                <input name="last" value={lastname} onChange={(evt) => setLastName(evt.target.value)} />

                <label >Username:</label>
                <input name="username" value={username} onChange={(evt) => setUserName(evt.target.value)} />

                <label>Email:</label>
                <input name="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />

                <label>Password:</label>
                <input type="password"name="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />

                <label>Address:</label>
                <input name="address" value={addressSt} onChange={(evt) => setAddress(evt.target.value)} />

                <label >Apt:</label>
                <input name="apt" value={addressApt} onChange={(evt) => setApt(evt.target.value)} />

                <label>City:</label>
                <input name="city" value={addressCity} onChange={(evt) => setCity(evt.target.value)} />

                <label>State:</label>
                <input name="state" value={addressState} onChange={(evt) => setState(evt.target.value)} />

                <label>Zip Code:</label>
                <input name="zip" value={addressZip} onChange={(evt) => setZip(evt.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm