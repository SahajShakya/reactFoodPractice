import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import heroImg from "../assets/images/hero.png"
import Helmet from "../components/Helmet/Helmet";
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/productCard/ProductCard';
import TestimonialSlider from '../components/slider/TestimonialSlider';

import "../components/styles/hero-section.css"
import "../components/styles/home.css";

import FeatureImg01 from '../assets/images/service-01.png'
import FeatureImg02 from '../assets/images/service-02.png'
import FeatureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products';

import foodCategoryImg01 from '../assets/images/hamburger.png'
import foodCategoryImg02 from '../assets/images/pizza.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import networkImg from '../assets/images/network.png';

import whyImage  from '../assets/images/location.png'
const featureData = [
  {
    title: 'Quick Delievery',
    desc: 'asdas asdasd asdasd asdasd asda',
    imgUrl: FeatureImg01,
  },
  {
    title: 'Quicky DIne IN',
    desc: 'asdas asdasd asdasd asdasd asda',
    imgUrl: FeatureImg02,
  },
  {
    title: 'Good Service ',
    desc: 'asdas asdasd asdasd asdasd asda',
    imgUrl: FeatureImg03,
  },
]

const Home = () => {

  const [ category, setCategory ] = useState('ALL');
  const [ allproduct, setAllProduct ] = useState(products);

  const [ hotPizza, setHotPizza ] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [])
  

  useEffect(() => {
    if(category === 'ALL') {
      setAllProduct(products);
    }
    if(category === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger');
      setAllProduct(filteredProducts);
    }
    if(category === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza');
      setAllProduct(filteredProducts);
    }
    if(category === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread');
      setAllProduct(filteredProducts);
    }
  }, [category])
  

  return (
    <>
      <Helmet title="home">
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="hero__content">
                  <h5 className='mb-3'>Easy way to make an order</h5>
                  <h1 className='mb-4 hero__title'><span>Hungry? </span>just wait <br /> food at <span> your door step</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis exercitationem </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className='order__btn d-flex align-items-center justify-content-between'>
                      Order now
                      <i class="ri-arrow-right-line"></i>
                    </button>
                    <button className='all__food-btn'>
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>

                  <div className='hero__serviced d-flex align-item-center gap-5 mt-5'>
                    <p className='d-flex align-item-center gap-2'>
                      <span className='shipping__icon'><i class="ri-car-fill"></i> No Shipping Charge</span> {" "}
                    </p>
                    <p className='d-flex align-item-center gap-2'>
                      <span className='shipping__icon'><i class="ri-shield-check-fill"></i> 100% secure CheckOut</span> {" "}
                    </p>
                  </div>

                </div>
              </Col>

              <Col lg='6' md='6'>
                <div className="hero__img">
                  <img src={heroImg} alt="hero-img" className='w-100' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Category />
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h5 className='feature__subtitle mb-4'>What we serve</h5>
                <h2 className='feature__title'>Just sit back at home</h2>
                <h2 className='feature__title'>
                  We will <span>take care</span>
                </h2>
                <p className='mb-1 mt-4 feature__text'>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                <p className='mb-1 mt-4 feature__text'>Lorem ipsum, dolor sit amet consectetur adipisicing </p> {" "}
              </Col>

              
              {
                featureData.map((item, index) => (
                  <Col lg='4' md='6' sm="6" key={index} className="mt-5">
                    <div className="feature__item text-center px-5 py-3">
                      <img src={item.imgUrl} alt="feature-img" />
                      <h5 className='fw-bold'>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </Col>

               
                ))
              }
            </Row>
          </Container>
        </section>

        <section>
              <Container>
                <Row>
                  <Col lg='12' className='text-center'>
                    <h2>Popular Foods</h2>
                  </Col>

                  <Col lg='12'>
                    <div className="food__category d-flex align-item-center justify-content-center gap-4">
                      <button className={`all__btn ${category === 'ALL' ? 'foodBtnActice' : ''}`} onClick={() => setCategory('ALL')}>All</button>
                      <button className={`d-flex align-item-center gap-2 ${category === 'BURGER' ? 'foodBtnActice' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01} alt="" />Burger</button>
                      
                      <button className={`d-flex align-item-center gap-2 ${category === 'PIZZA' ? 'foodBtnActice' : ''}`} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg02} alt="" />Pizza</button>

                      <button className={`d-flex align-item-center gap-2 ${category === 'BREAD' ? 'foodBtnActice' : ''}`} onClick={() => setCategory('BREAD')} ><img src={foodCategoryImg03} alt="" />Bread</button>
                    </div>
                  </Col>

                  {
                    allproduct.map(item => (
                      <Col lg='3' md='4' key={item.id} className="mt-5">
                        <ProductCard item={item} />
                      </Col>
                    ))
                  }

                </Row>
              </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                  <img src={whyImage} alt="why tasty treats" className='w-100'/>
              </Col>
              <Col lg='6' md='6'>
                  <div className="why__tasty-treat">
                    <h2 className="tasty_treat-title mb-4">
                      Why <span>Tasty treat</span>
                    </h2>
                    <p className='tasty__treat-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam iste suscipit dolorem ad non recusandae ut, 
                    consectetur, debitis deleniti a similique optio aspernatur necessitatibus excepturi quaerat ducimus illo! Sit, ipsa?</p>
                    <ListGroup className='mt-5'>
                      <ListGroupItem className='border-0 ps-0'>
                        <p  className='choose__us-item d-flex align-item-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Fresh and Tasty Foods
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat, deserunt facere magni, 
                        excepturi, alias tempore ratione quo omnis accusantium molestiae? Eaque minus inventore numquam, optio omnis iure id officia!</p>
                      </ListGroupItem>
                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-item d-flex align-item-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i>Quality Support Foods
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat, deserunt facere magni, 
                        excepturi, alias tempore ratione quo omnis accusantium molestiae? Eaque minus inventore numquam, optio omnis iure id officia!</p>
                        
                      </ListGroupItem>
                      <ListGroupItem className='border-0 ps-0'>
                        <p className='choose__us-item d-flex align-item-center gap-2'>
                        <i class="ri-checkbox-circle-line"></i> Order from any loction
                        </p>
                        <p className='choose__us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat, deserunt facere magni, 
                        excepturi, alias tempore ratione quo omnis accusantium molestiae? Eaque minus inventore numquam, optio omnis iure id officia!</p>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='pt-0'>
          <Container>
          <Row>
            <Col lg='12' className='text-center'>
                  <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.map(item => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              
              <Col lg='6' md='6'>
                <div className='testinomial'>
                  <h5 className='testinomail__subtitle mb-5'>Testinomail</h5>
                  <h2 className='testinomail__title mb-4'>What out <span> customer </span>are saying?</h2>
                  <p className='testinomial__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos 
                    ratione temporibus quae cupiditate, magni distinctio quos suscipit sapiente ullam
                    beatae aliquam nam eum minus expedita, repellendus saepe libero necessitatibus!
                  </p>
                  <TestimonialSlider />
                </div>
              </Col>

              <Col lg='6' md='6'>
                <img src={networkImg} alt="testimonial_image" className='w-100'/>
              </Col>

            </Row>
          </Container>
        </section>

      </Helmet>
    </>
  )
}

export default Home