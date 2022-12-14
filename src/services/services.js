import BaseUrl from './BaseUrl';
import axios from 'axios';

export const loadProducts = async()=>{
    const {data} = await axios.get(`${BaseUrl}`)
    return data
}