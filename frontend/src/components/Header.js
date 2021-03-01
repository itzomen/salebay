import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        //console.log('Logout')
    }

    return (
        <header>
        <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>SaleBay</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link><i className="fas fa-shopping-bag"></i> CART</Nav.Link>
                        </LinkContainer>

                        {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                            )}

                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-sign-in-alt"></i> LOGIN</Nav.Link>
                        </LinkContainer>
                    
                    </Nav>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
