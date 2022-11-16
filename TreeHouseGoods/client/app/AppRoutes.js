import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AllProducts, LandingPage, SingleProduct, Cart, UserDashboard, SignUp, AdminDashboard, AdminProducts, CreateProduct, ReviseProduct, Checkout, NotFound } from '../features';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (

    
    <div>

      {/**Nav Bar component? */}
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          {isAdmin ? (
            <>
          <Route path="/admin/" element={<AdminDashboard/>}/>
          <Route path="/admin/products" element={<><CreateProduct/> <AdminProducts/></>}/>
          <Route path="/admin/products/:id" element={<> <ReviseProduct/><SingleProduct/></>}/>
          </>
          ) : 
          (<Route path="/user/" element={<UserDashboard/>} />)}

          
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<AuthForm name="login" displayName="Login" />}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      )}
      <Routes>
      <Route path="/products" element={<AllProducts/>}/>
      <Route path='/home' element={<LandingPage/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/products/cat/:category" element={<AllProducts/>}/>
      <Route path="/products/:id" element={<SingleProduct/>}/>
      <Route path="/admin/*" element={<NotFound/>}/>
      {/* <Route path="/*" element={<NotFound/>}/>   */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
