import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Header />
      <div className="w-full justify-center items-center text-xl font-bold p-6">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      
    </div>
  );
}

export default App;

