import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'

export const cartReducer=(state = {cartItems:[]}, action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
       
        const item = action.payload
         //If the item already present
        const existItem = state.cartItems.find(x=>x.product_id === item.product_id)

        if(existItem){
            return{
                //replacing the existing item with the new item
                ...state,
                cartItems: state.cartItems.map(x=>x.product_id === existItem.product_id ? item : x)
            }
        }else{
            return{
                ...state,
                cartItems:[...state.cartItems, item]
            }
        }

        default:
            return state

    }
}