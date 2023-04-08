import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common_section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';


const Register = () => {
  const signUpName =  useRef();
  const signUpEmail =  useRef();
  const signUpPassword =  useRef();
  const signUpCPassword =  useRef();

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
                    <input type="text" placeholder='name' ref={signUpName} required/>
                  </div>
                  <div className="form_group">
                    <input type="email" placeholder='Email' ref={signUpEmail} required/>
                  </div>
                  <div className="form_group">
                    <input type="password" placeholder='password'ref={signUpPassword}  required/>
                  </div>
                  <div className="form_group">
                    <input type="password" placeholder='Confirm password'ref={signUpCPassword}  required/>
                  </div>
                  <button type="submit" className='addToCart__btn m-auto'>Register</button>
                </form>
                <Link to='/login'>Already have an Account? Click here to Login</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Register