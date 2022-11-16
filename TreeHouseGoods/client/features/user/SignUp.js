import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../app/UserSlice/UserSignUpSlice";



const SignUp = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addressSt, setAddress] = useState('')
    const [addressApt, setApt] = useState('')
    const [addressCity, setCity] = useState('')
    const [addressState, setState] = useState('')
    const [addressZip, setZip] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function createUser(e) {
        e.preventDefault()
        dispatch(
            postUser({
                firstname, lastname, username, email, password, addressSt, addressApt, addressCity, addressState, addressZip
            })
        )
        navigate('/login')
    }
    return (
        <div className="signupform">
            <form onSubmit={createUser}>
                <label><small>first name</small></label>
                <input name="first" value={firstname} type='text' onChange={(evt) => setFirstName(evt.target.value)} />

                <label><small>last name</small></label>
                <input name="last" value={lastname} type='text' onChange={(evt) => setLastName(evt.target.value)} />

                <label><small>username</small></label>
                <input name="username" value={username} type='text' onChange={(evt) => setUserName(evt.target.value)} />

                <label><small>email</small></label>
                <input name="email" value={email} type='text' onChange={(evt) => setEmail(evt.target.value)} />

                <label><small>password</small></label>
                <input name="password" value={password} type='text' onChange={(evt) => setPassword(evt.target.value)} />

                <label><small>address</small></label>
                <input name="address" value={addressSt} type='text' onChange={(evt) => setAddress(evt.target.value)} />

                <label><small>apt</small></label>
                <input name="apt" value={addressApt} type='text' onChange={(evt) => setApt(evt.target.value)} />

                <label><small>city</small></label>
                <input name="city" value={addressCity} type='text' onChange={(evt) => setCity(evt.target.value)} />

                <label><small>state</small></label>
                <input name="state" value={addressState} type='text' onChange={(evt) => setState(evt.target.value)} />

                <label><small>zip Code</small></label>
                <input name="zip" value={addressZip} type='text' onChange={(evt) => setZip(evt.target.value)} />
                <div>
                <button className="signButton">Submit</button></div>
                <div>
                <button className="signButton" type="button" onClick={() => {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setAddress('')
                    setApt('')
                    setCity('')
                    setState('')
                    setZip('')
                }}> Reset </button></div>
            </form>
        </div>
    )

}
// additional function, forgot password route
// autocomplete function
export default SignUp;