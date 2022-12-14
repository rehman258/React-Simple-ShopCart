import Types from '../types/types';


export const loadProductsAction = (product)=>{
    return {
        type:Types.LOAD_PRODUCTS,
        payload:product,
    }
} 