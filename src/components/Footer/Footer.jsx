import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import '../styles/footer.css'

import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5 className='footer__title'>Tasty Treats</h5>
              <p>
                Lorem ipsum dolor sit amet 
                Enim quis cumque quisquam fuga reiciendis 
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h5>Delievery TIme</h5>
            <ListGroup  className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thrusday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5>Contact</h5>
            <ListGroup  className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone Number: XXXXXXX</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: aaa@aa.com</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Location: XYZ</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5>Blog</h5>
            <ListGroup  className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Subscrbe to the blog</p>
                <div className="newsletter">
                  <input type="email" placeholder='Add Email here' />
                  <span><i class="ri-send-plane-line"></i></span>
                </div>
              </ListGroupItem>
              
            </ListGroup>
          </Col>
        </Row>
        
        <Row>
          <Col lg='6' md='6'>
            <p className='copyright__text'>Copyright - 2022, Website made by Sahaj Shakya. All Rught Reserved</p>
          </Col>
          <Col lang='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-center">
              <p className='m-0'> Follow</p>
              <span>
                {"  "}
                <Link to='https://www.facebook.com'><i class="ri-facebook-line"></i></Link>
                {"  "}
              </span>
              <span>
                {"  "}
                <Link to='https://www.facebook.com'><i class="ri-git-commit-line"></i></Link>
                {"  "}
              </span>
              <span>
                {"  "}
                <Link to='https://www.facebook.com'><i class="ri-youtube-line"></i></Link>
                {"  "}
              </span>
              <span>
                {"  "}
                <Link to='https://www.facebook.com'><i class="ri-linkedin-line"></i></Link>
                {"  "}
              </span>
            </div>
          </Col>
        </Row>

      </Container>
    </footer>
  )
}

export default Footer