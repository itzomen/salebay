import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from "../actions/productActions";
import TopCarousel from '../components/TopCarousel'


function Home({ history }) {
    const dispatch = useDispatch()
    //selecting var form productReducer which has error, loading, products
    const productList = useSelector(state => state.productList)
    const {error, loading, products, page, pages} = productList

    let keyword = history.location.search

    useEffect(() => {
        console.log('Products num:', products.length)
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])


    return (
        <div>
            {!keyword && <TopCarousel />}

            <h2>Trending products</h2>

            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                : 
                <div>

                    {/* {cartItems.length == 0 ? (
                                        <Message variant='info'>
                                            Your cart is empty <Link to='/'>Go Back</Link>
                                        </Message>
                                    ) : (
                                        suc
                                    )} */}

                    <Row>
                        {products.map(product => (
                            // add key as each product should have unique id
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate page={page} pages={pages} keyword={keyword} />
                </div>
        }

            
        </div>
    )
}

export default Home
