import BaseUrl from './BaseUrl';
import axios from 'axios';

export const loadProducts = async()=>{
    const {data} = await axios.get(`${BaseUrl}`)

    const filterTabs = new Set(); 
    await data.forEach(element => {
           filterTabs.add(element.category)
    });

    const constModifiedData = {
        list:data,
        categories:[...filterTabs]
    }
    return constModifiedData;
}