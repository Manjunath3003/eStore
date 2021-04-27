import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import message from '../components/Message'
import {addToCart} from '../actions/cartActions'


const CartScreen = ({match,location,history})=> {
    const productId= match.params.id
    //location.search will give the value after question mark(?) "?qty=1" from the url
    //split output [/qty,1] we want value in index 1 and change to Number data type
    const qty = location.search ? Number(location.search.split("=")[1]): 1
  
    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart


    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, qty))
        }
      }, [dispatch, productId, qty])
   
    return (
        <div>
         <h1>Cart</h1>
        </div>
    )
}

export default CartScreen
