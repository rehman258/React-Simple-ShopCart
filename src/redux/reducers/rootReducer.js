import {combineReducers} from 'redux';


import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import productsReducer from './productsReducer';
import contactReducer from './contactReducer';


const rootReducer = combineReducers({
    homeReducer,
    aboutReducer,
    productsReducer,
    contactReducer,
})
export default rootReducer;