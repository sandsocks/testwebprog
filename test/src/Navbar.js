import {Outlet, Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Logo from './assets/purrfect-delights-logo.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar-css.css';


const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
            src={Logo}
            alt="Logo"
            className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success" className="search-button">Search</Button> */}
            </Form>
            
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Featured" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/featured">Hot</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/featured">Promo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/featured">Brands</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/products">Cat Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products">Dog Food</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/products">Dry Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products">Wet Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products">Treats</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="My Accounts" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">Log In</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;