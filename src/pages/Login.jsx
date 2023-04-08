import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common_section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

const Login = () => {

  const loginNameRef =  useRef();
  const loginPasswordRef =  useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto'>
                <form action="" className='form mb-5' onSubmit={handleSubmit}>
                  <div className="form_group">
                    <input type="email" placeholder='Email' ref={loginNameRef} required/>
                  </div>
                  <div className="form_group">
                    <input type="password" placeholder='password'ref={loginPasswordRef}  required/>
                  </div>
                  <button type="submit" className='addToCart__btn m-auto'>Login</button>
                </form>
                <Link to='/register'>No Account? Click here to Register</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Login