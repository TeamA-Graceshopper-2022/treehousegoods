import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from './AllProductsSlice/allProductsSlice';
import singleProductSlice from './SingleProductSlice/SingleProductSlice';
import UserSignUpSlice from './UserSlice/UserSignUpSlice';

const store = configureStore({
  reducer: { auth: authReducer,
  products: allProductsSlice,
  singleProduct: singleProductSlice,
  newUser: UserSignUpSlice},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
