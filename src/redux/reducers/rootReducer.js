import {combineReducers} from 'redux';


import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import productsReducer from './productsReducer';
import contactReducer from './contactReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    homeReducer,
    aboutReducer,
    productsReducer,
    contactReducer,

    productReducer,
    cartReducer,
})
export default rootReducer;