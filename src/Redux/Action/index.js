import { ADD_ITEM, LIKE_ITEM,ITEM_PLUS,ITEM_MINUS,UNLIKE,TOTAL } from "./actionType";
import store from "../Store";

const addCart = (product) => {
    const payload = {
        product:{...product,quantity:1,total:product.price}
     }
    return {
        type: ADD_ITEM,
        payload
    };
};

const likeProduct = (product) => {
    let payload = {
        product:product
     }
    return {
        type: LIKE_ITEM,
        payload
    };
};

const IncresProduct = (index) => {
    const getstate = store.getState().addCart
    const IncresQuentity = getstate[index]
    IncresQuentity.quantity = IncresQuentity.quantity + 1
    const fixed = IncresQuentity.price * IncresQuentity.quantity
    IncresQuentity.total = fixed.toFixed(2)
    store.dispatch(grendTotal(getstate))
    return {
        type: ITEM_PLUS,
        getstate
    };
};

const DicProduct = (index) => {
    const getstate = store.getState().addCart
    const dicQuentity = getstate[index]
    dicQuentity.quantity = dicQuentity.quantity - 1
    const fixed = dicQuentity.price * dicQuentity.quantity
    dicQuentity.total = fixed.toFixed(2)
    if(dicQuentity.quantity < 1){
        getstate.splice(index, 1);
    }
    store.dispatch(grendTotal(getstate))
    return {
        type: ITEM_MINUS,
        getstate
    };
    
};

const unLikeProduct = (index) => {
    const likeProductData = store.getState().likeProduct
     likeProductData.splice(index, 1);
    return {
        type: UNLIKE,
        likeProductData
    };
};

const grendTotal = (getstate) => {
    // const getstate = store?.getState().addCart
    var grendTotal = 0
        for (let index = 0; index < getstate?.length; index++) {
            const element = parseFloat(getstate[index]?.total);
            grendTotal = grendTotal + element
        }
    return {
        type: TOTAL,
        grendTotal
    };                           
};


export { addCart,likeProduct,IncresProduct,DicProduct,unLikeProduct,grendTotal };