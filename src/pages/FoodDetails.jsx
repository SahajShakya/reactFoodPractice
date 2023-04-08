import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common_section/CommonSection';
import products from '../assets/fake-data/products';
import ProductCard from "../components/UI/productCard/ProductCard"

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shoppingCart/cartSlice';

import "../components/styles/product_details.css";

const FoodDetails = () => {
  

  const [tab, setTab] = useState("desc");
  const [ enteredName, setEnteredName ] = useState('')
  const [ enteredEmail, setEnteredEmail ] = useState('')
  const [ reviewMsg, setReviewMsg ] = useState('');
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);

  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);
  const fileteedArray = relatedProduct.filter((item) => item.id !== product.id )

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }

  const handleSubmit = (e) => {

  }


  useEffect(() => {
    setPreviewImg(image01)
  },[])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])
  

  return (
    <>
      <Helmet title="Product_details">
        <CommonSection title= {title} />
        
        <section>
          <Container>
            <Row>
              <Col lg='2' md='2'>
                <div className="product__images">
                  <div className="img__item" onClick={() =>  setPreviewImg(image01) } >
                    <img src={product.image01} alt="" className='w-50' />
                  </div>

                  <div className="img__item" onClick={() =>  setPreviewImg(product.image02) }>
                    <img src={product.image02} alt="" className='w-50'  /> 
                  </div>
                  <div className="img__item" onClick={() =>  setPreviewImg(product.image03) }>
                    <img src={product.image03} alt="" className='w-50'  />
                  </div>
                </div>
              </Col>
              
              <Col lg='4' md='4'>
                <div className="product__main_img">
                  <img src={previewImg} alt="" className='w-100' />
                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="single__product_content">
                  <h2 className='product__title mb-3'>{ title }</h2>
                  <p className="product__price">{" "}
                    Price:<span> ${ price }</span>
                    </p>
                  <p className='category mb-5'>
                    Category: <span> { category } </span>
                  </p>
                  <button className='addToCart__btn' onClick={addItem}>Add to CART</button>
                </div>
              </Col>
              
              <Col lg='12'>
                <div className="tabs d-flex align-items-center gap-3 py-2">
                  <h6 className={`${ tab ==='desc' ? "tab__active" : "" }`} onClick={() => setTab('desc')}>Description</h6>
                  <h6 className={`${ tab ==='rev' ? "tab__active" : "" }`} onClick={() => setTab('rev')}>Review</h6>
                </div>
                { 
                  tab ==='desc' ? 
                                  <div className="tab__content">
                                  <p>
                                    { desc }
                                  </p>
                                </div>
                                : 
                                <div className="tab__form mb-3">
                                  <div className="review pt-5">
                                    <p className="user__name mb-3">
                                      Jhon Doe
                                    </p>
                                    <p className="user__email">jhon@gmail.com</p>
                                    <p className='feedback__text'>Great Product</p>
                                  </div>

                                  <div className="review">
                                    <p className="user__name mb-0">
                                      Jhon Doe
                                    </p>
                                    <p className="user__email">jhon@gmail.com</p>
                                    <p className='feedback__text'>Great Product</p>
                                  </div>

                                  <div className="review">
                                    <p className="user__name mb-0">
                                      Jhon Doe
                                    </p>
                                    <p className="user__email">jhon@gmail.com</p>
                                    <p className='feedback__text'>Great Product</p>
                                  </div>
                                  

                                  <form className='form' onSubmit={handleSubmit}>
                                    <div className="form_group">
                                      <input type="text" placeholder='Enter yout name' onChange={(e) => setEnteredName(e.target.value)} required />
                                    </div>

                                    <div className="form_group">
                                      <input type="text" placeholder='Enter yout name' onChange={(e) => setEnteredEmail(e.target.value)} required />
                                    </div>

                                    <div className="form_group">
                                      <textarea
                                        rows={8}
                                        type="text" 
                                        placeholder='Enter yout Message'
                                        onChange={(e) => setReviewMsg(e.target.value)} 
                                        required
                                      />
                                    </div>

                                    <button className="addToCart__btn">
                                      Submit
                                    </button>

                                  </form>
                                </div>
                }
              </Col>
              
              <Col lg='12' className='mb-5 mt-4'>
                <h2 className='related_product_title'>You might also like</h2>
              </Col>

              {
                fileteedArray.map(item => (
                  <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))
              }

            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default FoodDetails


