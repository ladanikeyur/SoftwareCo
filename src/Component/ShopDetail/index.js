import React, { Component, useEffect, useState } from 'react'
import Location from '../../assets/Icon/Location.png'
import Star from '../../assets/Icon/Star.png'
import { shopDetail } from '../../config/ShopDetail'
import Prev from '../../assets/Icon/Prev.png'
import Next from '../../assets/Icon/Next.png'
import { useNavigate } from 'react-router-dom'

const reviewStar = [Star, Star, Star, Star, Star]
const ShopDetail = () => {
    const navigation = useNavigate()

    return (
        <div className='container mt-5'>
            <p className='shop'>{shopDetail.length} shops found</p>
            <div className='row'>
                {
                    shopDetail.map((val, i) => {
                        return (
                            <div className='col-sm-3'>
                                <div class="card shopmain">
                                    <img src={val.image} width="100%" height="180px" />
                                    <div class="card-body">
                                        <h3 className='shopName'>{val.name}</h3>
                                        <div className='addressFlex'>
                                            <img src={Location} className="location" />
                                            <p className='address'>{val.location}</p>
                                        </div>
                                        <div className='Review'>
                                            <div>
                                                {
                                                    reviewStar.map((val, i) => {
                                                        return (
                                                            <img src={val} height="20px" width="20px" />
                                                        )
                                                    })
                                                }
                                            </div>
                                            <p className='ReviewText'>{val.review} reviews</p>
                                        </div>
                                        <button className='viewBtn' onClick={() => { navigation('/product', { state: { product: val.product } }) }}>VIEW ALL 134 ITEMS</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default ShopDetail
