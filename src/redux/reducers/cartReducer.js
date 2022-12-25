import Types from '../types/types';


const cartState = {
    cartList:null,
    isReload:false,
    defaultQuantityPrice:0,
} 

// cont checkStateItem =

const cartReducer = (state=cartState,{type,payload})=>{

    switch(type){
        case Types.LOAD_CART_ITEMS:
            console.log(payload)
            if(payload.length===0) return state
                return{
                    ...state,
                    cartList:payload
                }
            
        case Types.ADD_TO_CART:
            let updatedCartList=[];
            if(state.cartList===null){
                updatedCartList=[payload]
            }else{
                updatedCartList =  [...state.cartList,payload]
            }
            return {
                ...state,
                cartList:updatedCartList
            }
        case Types.REMOVE_FROM_CART:
            const filteredList =  state.cartList.filter(cartItem=>cartItem.id!==payload)
            if(filteredList.length===0){
                return {
                    ...state,
                    cartList:null
                }
            }else{
                return {
                    ...state,
                    cartList:filteredList
                }
            }
        
        case Types.UPDATE_CART_ITEM:
            const updatedQuantityCartList = state.cartList.map(item=>item!==payload.id?item:payload)
            return {
                ...state,
                cartList:updatedQuantityCartList
            }

        default : return state

    }

}
export default cartReducer