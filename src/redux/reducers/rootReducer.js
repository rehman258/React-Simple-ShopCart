import {combineReducers} from 'redux';


import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import contactReducer from './contactReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    homeReducer,
    aboutReducer,
    contactReducer,

    productReducer,
    cartReducer,
})
export default rootReducer;