import Types from '../types/types';



const productState = {
    products:[],
    categories:[],
}

const productReducer = (state=productState,{type,payload})=>{
    switch(type){
        case Types.LOAD_PRODUCTS:
            return{
                ...state,
                products:payload.list,
                categories:payload.categories,
            }


        default:return state
    }
}

export default productReducer;