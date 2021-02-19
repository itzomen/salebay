import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from "../actions/productActions";
import { productListReducer } from '../reducers/productReducers';


function Home() {
    const dispatch = useDispatch()
    //selecting var form productReducer which has error, loading, products
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [])


    return (
        <div>
            <h2>Trending products</h2>

            {loading ? <h2>Loading</h2>
                : error ? <h3>{error}</h3>
                : 
                <Row>
                    {products.map(product => (
                        // add key as each product should have unique id
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
        }

            
        </div>
    )
}

export default Home
