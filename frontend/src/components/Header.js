import React from 'react'
import {LinkContainer} from "react-router-bootstrap"
import {Container, Navbar,Nav} from "react-bootstrap"
const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='/'>
              <Navbar.Brand >eShop</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link ><i className="fa fa-shopping-cart" ></i></Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                  <Nav.Link><i className="fa fa-user px-1"></i>Sign In</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </header>
    )
}

export default Header
