import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from '@material-ui/core';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


function NavBar(props) {
    return(
        

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {props.user &&
                    <Nav.Link href="/Home">Home</Nav.Link>
                    }
                    {props.user &&
                    <Nav.Link href="/Create">Create Listing</Nav.Link>
                    }
                    {props.user &&
                      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    }
                    
                    </Nav>
                    <Nav>
                    {!props.user &&
                        <Nav.Link href="/Login">Login</Nav.Link>
                    }
                    {props.user &&
                        <Nav.Link onClick={props.logOutUser} href="/Login">Logout</Nav.Link>
                    }
                    {props.user &&
                        <Nav.Link eventKey={2} href="/ShoppingCart">
                          Cart
                    </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
          </Container>
</Navbar>
    );
}
export default NavBar;