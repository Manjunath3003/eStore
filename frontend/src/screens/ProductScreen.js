import {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {productDetailsList} from '../actions/productActions'
import {Row, Col, Image, ListGroup, Card, Button, Form} from "react-bootstrap"
import Rating from "../components/Rating"
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({match,history}) => {

    //quantity in the cart is component level state
    const [qty,setQty]= useState(0)

    const dispatch = useDispatch()
    const productDetails= useSelector((state)=>state.productDetails)
  
    const {loading,product,error} = productDetails
    
    useEffect(()=>{
      dispatch(productDetailsList(match.params.id))
    } ,[dispatch, match])
   //event handlers
    const addToCartHandler =()=>{
        //redirect to the location from any place
        history.push(`/cart/${match.params.id}?qty=${qty}`)     
    }
    return (
        <>
        <Link to="/"> <Button  variant="light">Go Back</Button></Link>
        {loading? <Loader/>: error ? <Message variant="danger">{error}</Message> : 
         <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
               <ListGroup variant='flush'>
                   <ListGroup.Item><h2>{product.name}</h2></ListGroup.Item>
                   <ListGroup.Item><Rating value={product.rating} totalValue={product.numReviews}/></ListGroup.Item>
                   <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                   <ListGroup.Item>Description: {product.description}</ListGroup.Item>
               </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>${product.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>{product.countInStock > 0 ? "In Stock" : 'Out Of Stock'}</Col>
                        </Row>
                    </ListGroup.Item>
                    
                    {product.countInStock > 0 && (
                          <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>          
                            <Col  >
                            <Form.Control style={{padding: "0.75rem 0.2rem 0.75rem 0.4rem"}}
                            as="select" 
                            value={qty} 
                            onChange={(e)=>setQty(e.target.value)}>
                              {/* constructing an dynamic Array based on value in countInStock. eg: if count is 5 [0,1,2,3,4] */}
                               { [...Array(product.countInStock).keys()].map((x)=>(
                               <option key={x + 1} value={x + 1}>
                                   {x + 1}
                                </option>))}
                            </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item> 
                    )}
                    <ListGroup.Item>
                        <Button onClick={addToCartHandler} block disabled={product.countInStock===0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
}   
      
        </>
    )
}

export default ProductScreen
