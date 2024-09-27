import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <div className="w-full justify-center items-center text-xl font-bold p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      
    </div>
  );
}

export default App;

