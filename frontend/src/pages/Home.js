import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

import products from '../products'

function Home() {
    return (
        <div>
            Trending products
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
