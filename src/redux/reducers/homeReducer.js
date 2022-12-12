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
    productList:[]
}

const homeReducer = (state=homeState,{type,payload})=>{
    return state
}

export default homeReducer;