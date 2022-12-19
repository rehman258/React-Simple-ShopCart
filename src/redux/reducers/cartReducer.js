import Types from '../types/types';


const cartState = {
    cartList:[
        {
            category: "men's clothing",
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            id: 1,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            price: 109.95,
            isInCart:false,
            rating: {rate: 3.9, count: 120},
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        }
    ],
} 

// cont checkStateItem =

const cartReducer = (state=cartState,{type,payload})=>{

    switch(type){
        case Types.ADD_TO_CART:
            const updatedCartList =  [...state.cartList,payload]
            return {
                ...state,
                cartList:updatedCartList
            }
        case Types.REMOVE_FROM_CART:
            const filteredList =  state.cartList.filter(cartItem=>cartItem.id!==payload)
            return {
                ...state,
                cartList:filteredList
            }
        
        case Types.UPDATE_CART_ITEM:
            console.log('update')
            return state

        default : return state

    }

}
export default cartReducer