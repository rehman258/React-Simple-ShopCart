import React,{useState,useEffect} from 'react';

import {connect} from 'react-redux';

import CategoryFilter from '../../components/CategoryFilter';

import {loadProductsAction,updateProducInCarttAction} from '../../redux/actions/ProductAction';
import {loadProducts} from '../../services/services';
import Storage from '../../Storage/Storage'
import{ToastContainer,toast} from 'react-toastify';
import {addToCartAction} from '../../redux/actions/CartActions';
const Products = ({loadProductsAction,productReducer}) => {

    useEffect(()=>{
        (async()=>{
            loadProductsAction(await loadProducts())
        })()
    },[])

    const addCartHandler =(e,item)=>{

        if(Storage._checkStorage(item.id)){
            toast.info("Product's already added to cart",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }else{
            toast.success(' Product added to cart',{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            addToCartAction({...item,isInCart:true,});
            updateProducInCarttAction({...item,isInCart:true,});
            Storage._addStorage({...item,isInCart:true});

        }
   
}
    return (
        <section>
            <ToastContainer/>
            {
                            productReducer.products !== null ?

                            <CategoryFilter
                                addCartHandler={addCartHandler}
                                productPack={productReducer}
                            />:''
            }

        </section>
    );
}


const mapStateToProps=state=>{
    return state
}

const mapDispatchToProps={
    loadProductsAction,
    updateProducInCarttAction
}


export default connect(mapStateToProps,mapDispatchToProps)(Products);
