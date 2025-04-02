import React from "react";
import { Routes, Route } from "react-router-dom";
import { SpotifyProvider } from "./SpotifyContext.jsx";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import SpotifyLogin from "./components/auth/Spotify";
import Profile from "./components/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import Cart from "./components/Cart";

function App() {
  return (
    <SpotifyProvider>
      <Header />
      <div className="w-full justify-center items-center text-xl font-bold p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<Product />} />
          <Route path="auth/spotifylogin" element={<SpotifyLogin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/logout" element={<Logout />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </SpotifyProvider>
  );
}

export default App;
