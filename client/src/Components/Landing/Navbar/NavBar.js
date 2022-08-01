import React from 'react'
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
  return (
    <>
    <Navbar bg="primary px-5" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>Incubation</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1" className='text-white'>Home</Nav.Link> */}
      {/* <Nav.Link href="#action2">Link</Nav.Link>
      
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
          <Link to="/user/login">
            <Button variant="outline-warning" style={{color:"black"}}>Login</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
  )
}

export default NavBar