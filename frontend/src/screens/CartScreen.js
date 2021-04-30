import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
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

   // event handlers
        const removeFromCartHandler=(id)=>{
            console.log('remove')
        }
        const checkOutHandler=()=>{
            //url - if logedin redirected to shipping page else loginpage
            history.push('/login?redirect=shipping')
        }
    return (
        <Row>
            <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (<Message>Your cart is empty <Link to='/'>Go Back</Link></Message>):
            (<ListGroup variant="flush">
                {cartItems.map(item=>(
                <ListGroup.Item key={item.product_id}>
                    <Row>
                      <Col md={2}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                     </Col >  
                     <Col md={3}>
                        <Link to={`/product/${item.product_id}`}>{item.name}</Link>
                     </Col>
                     <Col md={2}>${item.price}</Col>
                     <Col md={2}>
                     <Form.Control style={{padding: "0.75rem 0.2rem 0.75rem 0.4rem"}}
                            as="select" 
                            value={item.qty} 
                            onChange={(e)=>dispatch(addToCart(item.product_id,Number(e.target.value)))}>
                              {/* constructing an dynamic Array based on value in countInStock. eg: if count is 5 [0,1,2,3,4] */}
                               { [...Array(item.countInStock).keys()].map((x)=>(
                               <option key={x + 1} value={x + 1}>
                                   {x + 1}
                                </option>))}
                            </Form.Control>
                     </Col>
                     <Col md={2}>
                         <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product_id)}><i className="fas fa-trash"></i></Button>
                     </Col>
                    </Row>
                </ListGroup.Item>
                ))}
            </ListGroup>)}
            </Col>
            <Col md={4}>
             <Card>
                 <ListGroup variant='flush'>
                     <ListGroup.Item>
                              {/* reduce() used to calculate the total quantity and price. 
                              It has a call back function and initial value of accumulator.
                              The final value stored in accumulator is returned */}
                         <h2>Subtotal ({cartItems.reduce((accumulator, item)=>accumulator+item.qty, 0)}) items</h2>
                         ${cartItems.reduce((accumulator, item)=> accumulator+item.qty* item.price,0).toFixed(2)} 
                         {/* toFixed(2) function rounds to 2 decimal places */}
                     </ListGroup.Item>
                     <ListGroup.Item><Button type='button' className='btn-block' disabled={cartItems.length ===0} onClick={()=>checkOutHandler()}>
                         Proceed To Checkout</Button></ListGroup.Item>
                 </ListGroup>
             </Card>
            </Col>
        
        </Row>
    )
}

export default CartScreen
