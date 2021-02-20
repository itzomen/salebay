import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from "../actions/productActions";


function ProductDetails({ match }) {

    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetail

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])


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
            
                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'} />
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <h6>Price: ${product.price}</h6>
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                    Desc: {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
            
                            <Col md={3}>
                                <Card>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
            
                                    <ListGroup.Item>
                                        <Button className='btn-block' disabled={product.countInStock == 0} type='button'>Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                        
                    )
                }

        </div>
    )
}

export default ProductDetails

