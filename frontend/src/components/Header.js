import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
    return (
        <header>
        <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">SaleBay</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cart"><i className="fas fa-shopping-bag"></i> CART</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-sign-in-alt"></i> LOGIN</Nav.Link>
                    
                    </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
