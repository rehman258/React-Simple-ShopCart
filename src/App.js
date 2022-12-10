import { useEffect } from 'react';
import axios from 'axios';

import {Link,Routes,Route,BrowserRouter} from 'react-router-dom';

import './App.css'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'


import FullLayout from './layout/FullLayout';

function App() {
  return (
    <FullLayout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </FullLayout>
  );
}

export default App;
