import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSlice from './AllProductsSlice/allProductsSlice';
import singleProductSlice from './SingleProductSlice/SingleProductSlice';

const store = configureStore({
  reducer: { auth: authReducer,
  products: allProductsSlice,
  singleProduct: singleProductSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
