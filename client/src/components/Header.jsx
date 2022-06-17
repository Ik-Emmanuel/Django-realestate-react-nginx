import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { GiHouse } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
import  logo  from "../images/Nuspace.png"


const Header = () => {
    return (
        <header>
            <Navbar fixed='top' bg="dark"  style={{backgroundColor:"red"}} variant='dark' collapseOnSelect expand="lg">
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand>  <img src={logo} alt="Logo" style={{width:"1.5em"}} /> Nuspace Real Esate</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

                        <Nav className="ml-auto">

                            <LinkContainer to="/properties">
                            <Nav.Link> Properties</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/'>
                            <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>


                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>

                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
