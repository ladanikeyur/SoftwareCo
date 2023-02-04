import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { DicProduct, grendTotal, IncresProduct } from '../../Redux/Action'

const Cart = () => {
    const state = useSelector((state) => state);
    const location = useLocation()
    const dispatch = useDispatch()
    // const [total,setTotal] = useState(0)

    useEffect(() =>{
        dispatch(grendTotal(state.addCart))
    },[state.total])
    return (
      <div className='container'>
        {
            state.addCart.map((val,i) =>{
                return(
                    <div className='List'>
                        <h5>{val.name}</h5>
                        <div className='detail'>
                            <h5>{val.price}</h5>
                            <div className='ProductChange'>
                                <button className='incriment'onClick={()=>{dispatch(DicProduct(i));}}>-</button>
                                <h5 className='mt-2'>{val.quantity}</h5>
                                <button className='incriment' onClick={()=>{dispatch(IncresProduct(i));}}>+</button>
                            </div>
                            <h5>{val.total}</h5>
                        </div>
                    </div>
                )
            })
        }
        <div className='total'>
            <p>Grend Total</p>
            <p>{state.total.toFixed(2)}</p>
        </div>
      </div>
    )
}


export default Cart
