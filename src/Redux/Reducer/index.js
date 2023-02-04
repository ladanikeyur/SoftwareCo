import { ADD_ITEM, LIKE_ITEM,ITEM_PLUS,ITEM_MINUS,UNLIKE,TOTAL } from "../Action/actionType";

const initialState = {
    addCart: [],
    likeProduct: [],
    total:0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                addCart: state.addCart.concat(action.payload.product),
            };
            case LIKE_ITEM:
            return {
                ...state,
                likeProduct: state.likeProduct.concat(action.payload.product),
            };
            case ITEM_PLUS:
            return {
                ...state,
                addCart: action.getstate,
            };
            case ITEM_MINUS:
            return {
                ...state,
                addCart: action.getstate,
            };
            case UNLIKE:
            return {
                ...state,
                likeProduct: action.likeProductData,
            };
            case TOTAL:
            return {
                ...state,
                total: action.grendTotal,
            };
            
        default:
            return state;
    }
};


export default cartReducer