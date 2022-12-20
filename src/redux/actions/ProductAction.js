import Types from '../types/types';


export const loadProductsAction = (products)=>{
    return {
        type:Types.LOAD_PRODUCTS,
        payload:products,
    }
} 

export const updateProducInCarttAction=(item)=>{
    return {
        type:Types.UPDATE_ITEM_IN_CART,
        payload:item
    }
}