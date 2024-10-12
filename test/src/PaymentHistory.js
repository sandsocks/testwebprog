import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function PaymentHistory() {
  return (
    <div style={{backgroundColor: '#f9e8ce'}}>
      <h1 style={{textAlign:'Left', lineHeight:'100px', marginLeft: '100px'}}>Payment History</h1> 
      <Container>
        <Row>
          <Col md={8} className="Accordions" style={{alignContent: 'left'}}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ backgroundColor: '#f5ae52', color: '#f5ae52'}}>August 30, 2024</Accordion.Header>
                <Accordion.Body>
                  <Table>
                    <thead>
                      <tr >
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Product</th>
                        <th></th>
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Dog Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult dogs</td>
                        <td style={{ color: '#bda28d'}}>$25.00</td>
                      </tr>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Cat Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult cats</td>
                        <td style={{ color: '#bda28d'}}>$20.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Grand Total:</td>
                        <td style={{ color: '#bda28d'}}>$40.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Address:</td>
                        <td style={{color: '#bda28d', textAlign:'left'}}>94 Kamuning Rd, Diliman, Quezon City, 1103 Metro Manila</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>August 4, 2024</Accordion.Header>
                <Accordion.Body>
                <Table>
                    <thead>
                      <tr >
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Product</th>
                        <th></th>
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Dog Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult dogs</td>
                        <td style={{ color: '#bda28d'}}>$25.00</td>
                      </tr>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Cat Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult cats</td>
                        <td style={{ color: '#bda28d'}}>$20.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Grand Total:</td>
                        <td style={{ color: '#bda28d'}}>$40.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Address:</td>
                        <td style={{color: '#bda28d', textAlign:'left'}}>Katipunan Ave, Quezon City, 1108 Metro Manila</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>July 30, 2024</Accordion.Header>
                <Accordion.Body>
                <Table>
                    <thead>
                      <tr >
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Product</th>
                        <th></th>
                        <th style={{ color: '#783719', textDecoration:'underline', fontSize:'20px'}}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Dog Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult dogs</td>
                        <td style={{ color: '#bda28d'}}>$25.00</td>
                      </tr>
                      <tr>
                        <td style={{ color: '#f5ae52', fontWeight: 'bold' }}>Cat Food</td>
                        <td style={{ color: '#bda28d'}}>Dry food for adult cats</td>
                        <td style={{ color: '#bda28d'}}>$20.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Grand Total:</td>
                        <td style={{ color: '#bda28d'}}>$40.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{ color: '#783719', fontWeight: 'bold'}}>Address:</td>
                        <td style={{color: '#bda28d', textAlign:'left'}}>2401 Taft Ave, Malate, Manila, 1004 Metro Manila</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PaymentHistory;