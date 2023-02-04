import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Component/Footer';
import Navbar from '../Component/NavBar';
import { addItem, deleteItem } from '../Redux/Action';
import LikeProduct from '../Screen/LikeProduct';
import Product from '../Screen/Product';
import Shop from '../Screen/Shop';
import Cart from '../Screen/ShopingCart';


const MainRoutes = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/like" element={<LikeProduct />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}


export default MainRoutes
