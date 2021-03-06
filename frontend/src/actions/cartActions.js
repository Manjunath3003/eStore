import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'


//using thunk calling arrow function inside a funtion. 
//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The inner function receives the store methods dispatch(used for async )and getstate(used for conditional).
export const addToCart =(id, qty)=>async(dispatch,getState)=>{

const {data} = await axios.get(`/api/products/${id}`)

dispatch({
    type: CART_ADD_ITEM,
    payload: {
        product_id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
    }
})

// getState we can get entire state tree.
//Saving in localstorage and can be saved only in string format
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}



