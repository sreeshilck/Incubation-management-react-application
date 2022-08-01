import React from 'react'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCookies } from 'react-cookie'
import './Navbar.css'

function NavBar() {

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const logout = () => {
        console.log("logout functionn");
        removeCookie("user");
        
        console.log(("sdf"));
        navigate("/");
    }


    return (
        <>
            <Navbar bg="primary text-white px-5" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white'>Incubation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 text-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link as={Link} to="/user/home" className='navitem ms-5 '>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/user/apply" className='navitem ms-3 '>Apply</Nav.Link>
                            <Nav.Link as={Link} to="/user/viewstatus" className='navitem ms-3 '>View Status</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            
                                <Button variant="outline-warning" className='text-white' onClick={logout}>Logout</Button>
                            
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar