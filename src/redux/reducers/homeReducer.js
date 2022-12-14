import Types from '../types/types';



const homeState = {
    sliderList:[
        {
            id:1,
            imgUrl:'',
            title:'Awesome Product One',
            description:'You Can order it now.'
        },
        {
            id:2,
            imgUrl:'',
            title:'Awesome Product Two',
            description:'You Can order it now.'
        },
        {
            id:3,
            imgUrl:'',
            title:'Awesome Product Three',
            description:'You Can order it now.'
        }
    ],
    products:{
        list:[],
        categories:[]
    }
}

const homeReducer = (state=homeState,{type,payload})=>{

    switch(type){
        case Types.LOAD_PRODUCTS:
            return{
                ...state,
                products:payload,
            }


        default:return state
    }
}

export default homeReducer;