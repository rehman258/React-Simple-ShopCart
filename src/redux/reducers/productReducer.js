import Types from '../types/types';



const productState = {
    products:{
        list:null,
        categories:null
    },
    isReload:false,
}

const productReducer = (state=productState,{type,payload})=>{
    switch(type){
        case Types.LOAD_PRODUCTS:
            return{
                ...state,
                products:payload
                
            }
        case Types.UPDATE_ITEM_IN_CART:
            const updatedList = state.products.list.map(item=>item.id!==payload.id?item:{...item,isInCart:true})
            return{
                ...state,
                products:{
                    ...state.products,
                    list:updatedList
                },
            }
            
        default:return state
    }
}

export default productReducer;