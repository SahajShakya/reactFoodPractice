import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import CommonSection from '../components/UI/common_section/CommonSection';
import Helmet from '../components/Helmet/Helmet'

import "../components/styles/cart.css"
import { cartActions } from '../store/shoppingCart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const cartTotal = useSelector(state => state.cart.totalAmount)

  return (
    <>
      <Helmet title='cart'>
        <CommonSection title='Your Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                {
                  cartItems.length === 0 ? 
                          <h5>Your cart is empty</h5>
                          :
                          <table className='table table-bordered'>
                            <thead>
                              <tr>
                                <th>Image</th>
                                <th>Product title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                cartItems.map(item => <Tr item={item} key={item.id} />)
                              }
                            </tbody>
                            <tbody>
                              <tr>
                                <th colSpan={2}>Total</th>
                                <th colSpan={3}>$ {cartTotal}</th>
                              </tr>
                            </tbody>
                          </table>
                }
                <div>
                  <h6>Subtotal: <span>${cartTotal}</span></h6>
                  <p>Taxes and Shipping will be calculated at checkout</p>
                  <div className='cart__page_btn'>
                    <button className='addToCart__btn me-4'><Link to="/foods">Continue Shopping</Link></button>
                    <button className='addToCart__btn'><Link to="/checkout">Proceed to Checkout</Link></button>
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

const Tr = props => {

  const { id,image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return <tr>
    <td className='text-center'>
      <img src={ image01 } className='text-center cart__img_box' alt="" />
    </td>
    <td className='text-center'>{ title }</td>
    <td className='text-center'>${ price }</td>
    <td className='text-center'>{ quantity }</td>
    <td className='text-center cart__item_del'>
      <i class="ri-delete-bin-fill" onClick={deleteItem}></i>
    </td>
  </tr>
}

export default Cart

