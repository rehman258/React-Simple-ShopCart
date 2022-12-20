import Types from '../types/types';



const productState = {
    products:null,
    categories:null,
    isReload:false,
}

const productReducer = (state=productState,{type,payload})=>{
    switch(type){
        case Types.LOAD_PRODUCTS:
            return{
                ...state,
                products:payload.list,
                categories:payload.categories,
            }
        case Types.UPDATE_ITEM_IN_CART:
            const updatedList = state.products.map(item=>item.id!==payload.id?item:{...item,isInCart:true})
            return{
                ...state,
                products:updatedList,
            }
            
        default:return state
    }
}

export default productReducer;