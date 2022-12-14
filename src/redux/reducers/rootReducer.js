import {combineReducers} from 'redux';


import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import productsReducer from './productsReducer';
import contactReducer from './contactReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
    homeReducer,
    aboutReducer,
    productsReducer,
    contactReducer,


    productReducer,
})
export default rootReducer;