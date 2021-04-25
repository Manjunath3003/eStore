import {useEffect} from 'react'
import {Link } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {productDetailsList} from '../actions/productActions'
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import Rating from "../components/Rating"
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({match}) => {
    
    const dispatch = useDispatch()
    const productDetails= useSelector((state)=>state.productDetails)
    const {loading,product,error} = productDetails
    useEffect(()=>{

      dispatch(productDetailsList(match.params.id))
    }

      
    ,[])
   
    return (
        <>
        <Link to="/"> <Button  variant="light">Go Back</Button></Link>
        {loading? <Loader/>: error ? <Message variant="danger">{error}</Message> :  <Row>
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
                            <Col>{product.countInStock >=0 ? "In Stock" : 'Out Of Stock'}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button block disabled={product.countInStock===0}>Add To Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>}
       
      
        </>
    )
}

export default ProductScreen
