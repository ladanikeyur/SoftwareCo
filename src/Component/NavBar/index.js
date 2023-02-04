import React, { Component } from 'react'
import Menu from '../../assets/Icon/menu.png'
import Share from '../../assets/Icon/Share.png'
import Like from '../../assets/Icon/Like.png'
import clock from '../../assets/Icon/clock.png'
import Cart from '../../assets/Icon/Cart.png'
import user from '../../assets/Icon/user.png'
import Home from '../../assets/Icon/Home.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const state = useSelector((state) => state);
    const navigation = useNavigate()
    return (
        <nav className="navbar navbar-expand-md navbar-main">
            <div className='container'>
                <img src={Menu} height={36} width={36} />
                <div className='deliverPart'>
                    <button className='postButton d-flex'>
                        <img src={Share} height={25} width={19} />
                        Delivery Address / Post Code
                    </button>
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                            <img src={clock} height={25} width={19} />
                            <span className='title'>Deliver ASAP</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div className='userPart'>
                    <div className='Flex'>
                        <img src={Home} height={25} width={19} />
                        <span className='title'>Shops</span>
                    </div>
                    <div className='Flex'>
                        <img src={user} height={25} width={19} />
                        <span className='title'>Sign in</span>
                    </div>
                    <div className='Like-btn Flex'>
                        <img src={Like} height={25} width={19} onClick={() =>{navigation('/like')}} />
                        <span className='Budge title'>{state.likeProduct.length}</span>
                    </div>
                    <div className='Like-btn Flex' onClick={() =>{navigation('/cart')}}>
                        <img src={Cart} height={25} width={19} />
                        <span className='Budge title'>{state.addCart.length}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Navbar
