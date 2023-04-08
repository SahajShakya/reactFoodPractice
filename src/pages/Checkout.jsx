import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common_section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import "../components/styles/checkout.css"

const Checkout = () => {

  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const shippingInfo = []

  const [ enterName, setEnterName ] = useState('');
  const [ enterEmail, setEnterEmail ] = useState('');
  const [ enterNumber, setEnterNumber ] = useState('');
  const [ enterPradesh, setEnterPradesh ] = useState('');
  const [ enterCity, setEnterCity ] = useState('');
  const [ postalCode, setPostalCode ] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      pradesh: enterPradesh,
      city: enterCity,
      postalcode: postalCode,
    }
    shippingInfo.push(userShippingAddress)
    alert(shippingInfo[0].email );
    console.log(shippingInfo);
    setEnterName('');
    setEnterEmail('');
    setEnterCity('');
    setEnterNumber('')
    setEnterPradesh('');
    setPostalCode('');
  }

  return (
    <>
      <Helmet title="CheckOut">
      <CommonSection title='Checkout' />
        <section>
          <Container>
            <Row>
              <Col lg='8' md='6'>
              <h6>Shipping Address</h6>
                <form className="checkout__form" onSubmit={handleSumbit}>

                  <div className="form_group">
                    <input type="text" placeholder='Enter your name' required onChange={e =>setEnterName(e.target.value)}/>
                  </div>

                  <div className="form_group">
                    <input type="email" placeholder='Enter your Email'  required onChange={e =>setEnterEmail(e.target.value)}/>
                  </div>

                  <div className="form_group">
                    <input type="number" placeholder='Phone Number' required onChange={e =>setEnterNumber(e.target.value)}/>
                  </div>

                  <div className="form_group">
                    <input type="text" placeholder='Pradesh' required onChange={e =>setEnterPradesh(e.target.value)}/>
                  </div>

                  <div className="form_group">
                    <input type="text" placeholder='City' required onChange={e =>setEnterCity(e.target.value)}/>
                  </div>

                  <div className="form_group">
                    <input type="number" placeholder='Postal Code' required onChange={e =>setPostalCode(e.target.value)}/>
                  </div>

                  <button type='sumbit' className='addToCart__btn mb-3'>
                    Payment
                  </button>

                </form>
              </Col>

              <Col lg='4' md='6'>
                  <div className='checkout__bill'>
                    <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: $<span>{cartTotalAmount}</span></h6>
                    <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: $<span>{shippingCost}</span></h6>
                    <div className="checkout__total">
                      <h5>Total: <span>$ {totalAmount}</span></h5>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default Checkout