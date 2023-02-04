import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import MarketImage from '../../Component/MarketImage'
import Tabs from '../../Component/Tabs'

const Product = () => {
    const location = useLocation()
    return (
        <>
            <MarketImage />
            <Tabs Product={location?.state?.product} />
        </>
    )
}



export default Product
