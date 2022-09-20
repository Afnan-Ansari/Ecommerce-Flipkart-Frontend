

import * as actionType from '../constants/cartConstant';


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
       case actionType.ADD_TO_CART:
        return {cartItems:action.payload}
       case actionType.REMOVE_FROM_CART:
        return {...state,cartItems:state.cartItems.unshift()} 
       default:
        return state; 
    }
} 