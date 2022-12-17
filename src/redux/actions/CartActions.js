import Types from '../types/types';



export const addToCartAction =(item)=>{
    return{
        type:Types.ADD_TO_CART,
        payload:item
    }
}


export const removeFromCartAction =(id)=>{
    return{
        type:Types.REMOVE_FROM_CART,
        payload:id
    }
}


export const updateCartItem =(item)=>{
    return{
        type:Types.UPDATE_CART_ITEM,
        payload:item
    }
}