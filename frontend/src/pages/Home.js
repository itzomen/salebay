import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {

        async function fetchProducts(){
            const { data } = await axios.get(`/api/products/`)
            setProducts(data)
            console.log('Data Fetced')
        }

        fetchProducts()

    }, [])

    return (
        <div>
            <h2>Trending products</h2>
            <Row>
                {products.map(product => (
                    // add key as each product should have unique id
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
