import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const order = useSelector((state) => state.cart.order)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(order)

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1 className='pageLogo'>TreeHouse Goods</h1>
      <nav>
        {isLoggedIn ? (
          <div className='navContainer'>
            {/* The navbar will show these links after you log in */}
            <div>
              <Link to="/home">Home</Link>
              <Link to="/products">Shop</Link>
            </div>
            <div className='navbarRightLinks'>
              {isAdmin ? (
                <>
                  <Link to='/admin/products'>All Products</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to='/admin/'>Admin</Link>
                </>
              ) : (
                <>
              
              <Link to={`/cart/`}>Cart</Link>
              <Link to='/user/'>Profile</Link>
              </>)}
              <button type="button" className="signButton" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='navContainer'>
            {/* The navbar will show these links before you log in */}
            <div>
              <Link to="/home">Home</Link>
              <Link to="/products">Shop</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
