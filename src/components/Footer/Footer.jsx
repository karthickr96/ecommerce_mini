import React from 'react';
import './footer.css';
import { Container, Col, Row, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="4" className='mb-4' md="6">
        <div className="logo">
              <div>
                  <h1 className='text-white'>mulitimart</h1>
              </div>
        </div>
        <p className="footer_text mt-4" md="6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam modi fugit cumque, omnis eum itaque eligendi id sunt dolorem. Dolores!
        </p>
        </Col>

        <Col lg="3" md="6" className='mb-4'>
          <div className="footer_quick_links">
            <h4 className="quick_links_title">Top category</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Modern sofa</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Smart watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg="2" md="6" className='mb-4'>
        <div className="footer_quick_links">
            <h4 className="quick_links_title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/shop'>Shop</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg="3" md="4">
        <div className="footer_quick_links">
            <h4 className="quick_links_title">Contact</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>Sydney, Australia</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
                <p>+619888976554</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
                <p>multimart@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12' className='mb-4'>
          <p className="footer_copyright">CopyRight {year} All rights reserved.</p>
        
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer