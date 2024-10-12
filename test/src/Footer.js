import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/purrfect-delights-logo.png'; // Import logo

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className='footerLogo'
            style={{ maxWidth: '200px', height: '50px' }} // Updated maxWidth
          >
            <Card>
              <Card.Img variant='left' src={logo} /> {/* Use imported logo */}
            </Card>
          </div>
        </Col>

        <Col>
          <div
            className='FooterLink'
            style={{ background: 'white', width: '155px' }}
          >
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link href='/home' style={{ color: '#422112' }}>
                Terms and Conditions
              </Nav.Link>
              <Nav.Link eventKey='link-1' style={{ color: '#422112' }}>
                Contact Us
              </Nav.Link>
              <Nav.Link eventKey='link-2' style={{ color: '#422112' }}>
                FAQs
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        <Col>
          <div
            className='FooterLink'
            style={{ background: 'white', width: '155px' }}
          >
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link href='/home' style={{ color: '#422112' }}>
                Privacy Policy
              </Nav.Link>
              <Nav.Link eventKey='link-1' style={{ color: '#422112' }}>
                Terms of Use
              </Nav.Link>
              <Nav.Link eventKey='link-2' style={{ color: '#422112' }}>
                Reviews
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        <Col>
          <div style={{ background: 'white', width: '1000px' }}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
