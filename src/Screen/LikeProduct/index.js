import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { unLikeProduct } from '../../Redux/Action'

const LikeProduct = () => {
    const state = useSelector((state) => state);
    const location = useLocation()
    const dispatch = useDispatch()
    return (
      <div className='container'>
        {
            state.likeProduct.map((val,ind) =>{
                return(
                    <div className='List'>
                        <img src={val.image} height={60} width={60}/>
                        <h5>{val.name}</h5>
                        <div className='detail'>
                            <h5>{val.price}</h5>
                            <div className='ProductChange'>
                                <h5 className='mt-2'>{val.quantity}</h5>
                            </div>
                            <h5>{val.total}</h5>
                            <h2 className='close' onClick={() =>{dispatch(unLikeProduct(ind))}}>&times;</h2>
                        </div>
                    </div>
                )
            })
        }
      </div>
    )
}


export default LikeProduct
