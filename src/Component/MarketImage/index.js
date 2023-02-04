import React, { Component } from 'react'
import MarketLogo from '../../assets/Image/MarketLogo.png'
import LightStar from '../../assets/Icon/LightStar.png'

const reviewStar = [LightStar, LightStar, LightStar, LightStar, LightStar]
const MarketImage = () => {
    return (
        <>
            <div className='marketImage'>
                <div className='container'>
                    <p className='text-light'>Home > Shops > Harris Farm Markets</p>
                    <div className='Logo'>
                        <img src={MarketLogo} height={118} width={118} />
                    </div>
                    <h1 className='text-center text-light'>Harris Farm Markets</h1>
                    <div className='shopReview'>
                        <div className='Star'>
                            {
                                reviewStar.map((val, i) => {
                                    return (
                                        <img src={val} height="20px" width="20px" />
                                    )
                                })
                            }
                        </div>
                        <p className='text-light mt-3'>No rating found yet</p>
                    </div>
                    <div className='btnCenter'>
                        <button className='btn btn-outline-light more-info'>More Info</button>
                        <button className='btn btn-outline-light  more-info'>Give a review</button>
                    </div>
                    <div className='SearchInput'>
                        <input type='text' className='InputType' placeholder='Search Harris Farm Products' />
                        <button className='SearctBtn'>SEARCH</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketImage
