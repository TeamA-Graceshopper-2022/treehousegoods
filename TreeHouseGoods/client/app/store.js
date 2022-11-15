import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from './AllProductsSlice/allProductsSlice';
import singleProductSlice from './SingleProductSlice/SingleProductSlice';
import UserSignUpSlice from './UserSlice/UserSignUpSlice';
import CartSlice from './Cart/CartSlice';
import AdminDashboardSlice from './Dashboard/AdminDashboardSlice';
import OrdersSlice from './OrdersSlice/Orders';

const store = configureStore({
  reducer: { auth: authReducer,
  products: allProductsSlice,
  singleProduct: singleProductSlice,
  newUser: UserSignUpSlice,
  cart: CartSlice,
  adminDashboard: AdminDashboardSlice,
  orders: OrdersSlice,
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
