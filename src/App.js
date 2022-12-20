import { useEffect } from 'react';
import axios from 'axios';

import {Link,Routes,Route,BrowserRouter} from 'react-router-dom';

import './App.css'
import './assets/style/components.css'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import CartList from './pages/cartList/CartList'
import Contact from './pages/contact/Contact'

import{connect} from 'react-redux';
import {loadCartItems} from './redux/actions/CartActions';
import Storage from './Storage/Storage';

import FullLayout from './layout/FullLayout';

function App({loadCartItems}) {
  useEffect(()=>{
    if(Storage._getStorage()){
      loadCartItems(Storage._getStorage())
    }
  },[])
  return (
    <FullLayout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cartlist" element={<CartList/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </FullLayout>
  );
}

const mapStateToProps=state=>{
  return state
}

const mapDispatchToProps={
  loadCartItems
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
