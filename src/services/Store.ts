import {combineReducers, legacy_createStore} from 'redux'
import { productReducer } from './shopping-cart/reducer/ProductReducer';

const Store = legacy_createStore(productReducer);

const reducer = combineReducers({
    products: productReducer,
  });

export default Store;

