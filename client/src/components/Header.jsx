import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { GiHouse } from "react-icons/gi";
import { LinkContainer } from "react-router-bootstrap";
import  logo  from "../images/Nuspace.png"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";


import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";



const Header = () => {

    const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);
    // state.auth returns the initial state object 


    const logoutHandler = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};


    return (
        <header>
            <Navbar fixed='top' bg="dark"  style={{backgroundColor:"red"}} variant='dark' collapseOnSelect expand="lg">
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand>  <img src={logo} alt="Logo" style={{width:"1.5em"}} /> NewSpace Real Esate</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>

                        <Nav className="ml-auto">

                            <LinkContainer to="/properties">
                            <Nav.Link> Properties</Nav.Link>
                            </LinkContainer>

                         
							{user ? (
								<NavDropdown
									title={
										user.first_name
											? user.first_name
											: "Welcome"
									}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>

									<NavDropdown.Item onClick={logoutHandler}>
										<FaSignOutAlt /> Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<FaSignInAlt /> Login
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
