import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1>TreeHouse Goods</h1>
      <nav>
        {isLoggedIn ? (
          <div className='navContainer'>
            {/* The navbar will show these links after you log in */}
            <div>
              <Link to="/home">Home</Link>
              <Link to="/products">All Products</Link>
            </div>
            <div>
              <Link to="/cart">Cart</Link>
              {isAdmin ? (<Link to='/admin/'>Admin</Link>) : (<Link to='/user/'>Profile</Link>)}
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='navContainer'>
            {/* The navbar will show these links before you log in */}
            <div>
              <Link to="/home">Home</Link>
              <Link to="/products">All Products</Link>
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
