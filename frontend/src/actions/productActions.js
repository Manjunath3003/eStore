import axios from 'axios'
import {PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstants'

//using thunk calling arrow function inside a funtion. 
//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
//The inner function receives the store methods dispatch(used for async )and getstate(used for conditional).
export const listProducts = ()=> async (dispatch)=>{
        try {
            dispatch({type: PRODUCT_LIST_REQUEST})
            const {data}= await axios.get('/api/products')
            dispatch({type:PRODUCT_LIST_SUCCESS, payload: data})
            
        } catch (error) {
            dispatch({type:PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })   
        }
    }

 export const productDetailsList =(id)=> async(dispatch)=>{
        try {
            dispatch({type:PRODUCT_DETAILS_REQUEST})
            const {data}= await axios.get(`/api/products/${id}`)
            dispatch({type:PRODUCT_DETAILS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type:PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })   
        }
    }