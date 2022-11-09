import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2SkrIWwy4T_MGw1woy0XVf0KVFlFvr3q0g&usqp=CAU"/>
            <div className="categoryButtons">
                <Link to="/products/plants"><div className="categoryBut"><div>Plants</div></div></Link>
                <Link to="/products/tea"><div className="categoryBut"><div>Tea</div></div></Link>
                <Link to="/products/coffee"><div className="categoryBut"><div>Coffee</div></div></Link>
                <Link to="/products/houseware"><div className="categoryBut"><div>Houseware</div></div></Link>
            </div>
        </div>
    )
}

export default LandingPage;