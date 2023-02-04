import React, { Component, useState } from 'react'
import All from '../../assets/Icon/all.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import View from '../../assets/Icon/Next.png';
import more from '../../assets/Icon/more.png';
import like from '../../assets/Icon/like.png';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, likeProduct } from '../../Redux/Action';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Tabs = ({ Product }) => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const [productType,setProductType] = useState("All")
    return (
        <>
            <div className='Tabbar'>
                <button className={productType === 'All' ? 'tabBtnActive' : 'tabBtn'} onClick={() =>{setProductType('All')}}><img src={All} className="ProductImage" />All</button>
                {
                    Product.map((val, i) => {
                        return (
                            <button className={productType === val.catogary ? 'tabBtnActive' : 'tabBtn'} onClick={() =>{setProductType(val.catogary)}}><img src={val.icon} className="ProductImage" /> {val.catogary}</button>
                        )
                    })
                }

            </div>
            <div className='container'>
                {
                    Product.map((val, i) => {
                        return (
                            productType === val.catogary || productType === "All" ?
                            <>
                                <div className='viewMain'>
                                    <h2 className='catogarys'>{val.catogary}</h2>
                                    <div className='View'>
                                        <p className='ViewText'>View all</p>
                                        <img src={View} width={8} height={15}/>
                                    </div>
                                </div>
                                <Carousel showDots={false} responsive={responsive}>
                                    {
                                        val.Items.map((item, index) => {
                                            return (
                                                <div class="card Productmain">
                                                    <img src={item.image} width="100%" height="200px" />
                                                    <div class="card-img-overlay">
                                                        <div className='imageBtn'>
                                                            <img src={more} className="image" height={50} width={50}/>
                                                            <img src={like} className="image" onClick={() =>{dispatch(likeProduct(val.Items[index]))}}/>
                                                        </div>
                                                    </div>
                                                    <p className='product-title'>{item.name}</p>
                                                    <div className='Content'>
                                                        <div className='price-main'>
                                                            <p className='product-price'>${item.price}</p>
                                                            <p className='product-kg'>{item.kg}</p>
                                                        </div>
                                                        <button className='add-btn' onClick={() =>{dispatch(addCart(val.Items[index]))}}>ADD TO CART</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </>:null

                        )
                    })
                }

            </div>
        </>
    )
}


export default Tabs
