import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from "../actions/productActions";


function ProductDetails({ match, history }) {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetail

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>

                {
                    loading ? <Loader />
                    : error
                        ? <Message variant='danger'></Message>
                    : (
                        <Row>
                            <Col md={6}>
                                <Image src={product.image} alt={product.name} fluid />
                            </Col>
            
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h4>{product.name}</h4>
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'} />
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>

                                        <Row>
                                        <Col md={3}>
                                                Price:
                                            </Col>
                                            <Col md={3}>
                                                <strong>${product.price}</strong>
                                            </Col>
                                            <Col md={3}>Status:</Col>
                                            <Col md={3}>
                                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                            </Col>
                                        </Row>
                                        
                                        
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <p className="mb-0">Desc: {product.description}</p>
                                    </ListGroup.Item>
                                   
                                    
                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Quantity</Col>
                                                <Col xs='auto' className='my-1'>
                                                    <Form.Control
                                                        as="select"
                                                        value={qty}
                                                        onChange={(e) => setQty(e.target.value)}
                                                    >
                                                        {
                                                            //[0,1,2]
                                                            [...Array(product.countInStock).keys()].map((x) =>(
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }

                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button variant="outline-primary" onClick={addToCartHandler} className='btn-block' disabled={product.countInStock == 0} type='button'>Add to Cart</Button>
                                    </ListGroup.Item>
                                    
                                    
                                </ListGroup>
                            </Col>
            
                        </Row>
                        
                    )
                }

        </div>
    )
}

export default ProductDetails

