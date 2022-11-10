import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

    async function createUser(e) {
        e.preventDefault()
        dispatch(
            postUser({
                firstname,lastname,username,email,password,addressSt,addressApt,addressCity,addressState,addressZip
            })
            )

    }
    return(
        <div className="signupform">
            <form onSubmit={createUser}>
                <label >First Name:</label>
                <input name="first" value={firstname} onChange={(evt) => setFirstName(evt.target.value)}/>

                <label  >Last Name:</label>
                <input name="last" value={lastname} onChange={(evt) => setLastName(evt.target.value)}/>

                <label >Username:</label>
                <input name="username" value={username} onChange={(evt) => setUserName(evt.target.value)} />
                
                <label>Email:</label>
                <input name="email" value={email} onChange={(evt) => setEmail(evt.target.value)}/>

                <label>Password:</label>
                <input name="password" value={password} onChange={(evt) => setPassword(evt.target.value)}/>

                <label>Address:</label>
                <input name="address" value={addressSt} onChange={(evt) => setAddress(evt.target.value)}/>

                <label >Apt:</label>
                <input name="apt" value={addressApt} onChange={(evt) => setApt(evt.target.value)}/>

                <label>City:</label>
                <input name="city" value={addressCity} onChange={(evt) => setCity(evt.target.value)}/>

                <label>State:</label>
                <input name="state" value={addressState} onChange={(evt) => setState(evt.target.value)}/>

                <label>Zip Code:</label>
                <input name="zip" value={addressZip} onChange={(evt) => setZip(evt.target.value)}/>

                <button>Submit</button>
                <button type="button" onClick={()=>{
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setAddress('')
                    setApt('')
                    setCity('')
                    setState('')
                    setZip('')
                }}> Reset </button>
            </form>
        </div>
    )

}
// additional function, forgot password route
// autocomplete function
export default SignUp;