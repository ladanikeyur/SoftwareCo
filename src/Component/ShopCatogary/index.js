import React, { Component, useState } from 'react'
import { catogaryData } from '../../config/catogaryData'

const ShopCatogary = () => {
    const [activeProduct, setActiveProduct] = useState("")
    return (
        <div className='Bg-image'>
            <div className='title'>
                <h1 className='text-center text-light pt-4'>Shop from your favourite</h1>
                <h1 className='text-center text-light'>grocery stores!</h1>
            </div>
            <div className='SearchShop'>
                <input type='text' className='InputType' placeholder='I am shopping for...' />
                <button className='SearctBtn'>SEARCH</button>
            </div>
            <div className='container'>
                <div className='catogary'>
                    {
                        catogaryData.map((val, i) => {
                            return (
                                <button className={activeProduct === val.name ? 'catogaryBtnActive' : 'catogaryBtn'} onClick={() => { setActiveProduct(val.name) }}>{val.name}</button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ShopCatogary
