import Types from '../types/types';

export const loadProductsAction = (productList)=>{
    return {
        type:Types.LOAD_PRODUCTS,
        payload:productList,
    }
} 