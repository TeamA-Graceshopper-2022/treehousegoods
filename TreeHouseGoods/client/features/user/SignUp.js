import React from "react";
import { useDispatch } from "react-redux";
// firstname, lastname, username, password, address, email, zipcode
const SignUp = () => {

    async function createUser(e) {
        e.preventDefault()

    }
    return(
        <div className="signupform">
            <form onSubmit={createUser}>
                <label>First Name:</label>
                <input/>
                <label>Last Name:</label>
                <input/>
                <label>Email:</label>
                <input/>
                <label>Password:</label>
                <input/>
                <label>Address:</label>
                <input/>
                <label>Apt:</label>
                <input/>
                <label>City:</label>
                <input/>
                <label>State:</label>
                <input/>
                <label>Zip Code:</label>
                <input/>
                <button>Submit</button>
            </form>
        </div>
    )

}
// additional function, forgot password route
export default SignUp;