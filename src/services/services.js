import BaseUrl from './BaseUrl';
import axios from 'axios';
import Storage from '../Storage/Storage';


export const loadProducts = async()=>{
    const {data} = await axios.get(`${BaseUrl}`)

    const filterTabs = new Set(); 
    await data.forEach(element => {
           filterTabs.add(element.category)
    }); 

    
    const modifiedData = {
        list:[],
        categories:[...filterTabs]
    }
        modifiedData.list = data.map(item=>Storage._checkStorage(item.id)
        ?
        {
            ...item,
            quantity:1,
            isInCart:true,
        }
        :
        {
            ...item,
            quantity:1,
            isInCart:false,
        }
        )
    
    return modifiedData;
}

export const loadSingleProduct = async(id)=>{
    // console.log(`${BaseUrl}/${id}`)
    const {data} = await axios.get(`${BaseUrl}/${id}`)
    return {
        ...data,
        quantity:1,
        isInCart:false,
    }
}