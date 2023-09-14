import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allProductsReducer } from './reducers/allProductsReducer';
import { cartReducer } from './reducers/cartReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { saleProductsReducer } from './reducers/saleProductsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    allProducts: allProductsReducer,
    saleProducts: saleProductsReducer

  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));