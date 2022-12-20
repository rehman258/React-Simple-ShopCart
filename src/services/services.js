import BaseUrl from './BaseUrl';
import axios from 'axios';

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
    
    data.forEach(dataItem=>{
        modifiedData.list.push({
            ...dataItem,
            isInCart:false,
        })
    })

    console.log('service worked')
    return modifiedData;
}