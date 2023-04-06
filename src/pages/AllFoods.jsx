import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPaginate from 'react-paginate';

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common_section/CommonSection';
import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/productCard/ProductCard';
import '../components/styles/all_foods.css'

const AllFoods = () => {

  const [ searchTerm, setSearchTerm ] = useState('');
  const [ currentpageNumber, setCurrentPageNumber ] = useState(0);

  const productPerPage = 8;
  const lastPostPage = currentpageNumber * productPerPage;
  const displayPage = products.slice(lastPostPage, lastPostPage + productPerPage);
  const pageCount = Math.ceil(products.length/productPerPage);
  const changePage = ({selected}) => {
    setCurrentPageNumber(selected);
  }
  

  return (
    <>
      <Helmet title="All-Foods">
        <CommonSection title="All Foods" />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='6'>
                <div className="seach__widget">
                  <input type="text" placeholder='Enter text' value={searchTerm} onChange = {e => setSearchTerm(e.target.value)}/>
                  <span>
                    <i class="ri-search-line"></i> 
                  </span>
                </div>
              </Col>
              <Col lg='6' md='6' sm='6' className='mb-5'>
                <div className="sorting__widget text-end">
                  <select className='w-50'>
                    <option>Default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
              </Col>
              { 
                displayPage
                ?.filter(item => {
                  if (searchTerm.value === "") return item;
                  
                  if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
                })
                .map(item => 
                  <Col lg='3' md='4' sm='6' xd='6' key={item.id}>
                    <ProductCard item = {item} />
                  </Col>
                )
              }
              
              {console.log(products.slice(0,8))}
              {console.log(products.slice(8,16))}

              <div>
                <ReactPaginate 
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel='Prev'
                  nextLabel='Next'
                  containerClassName='paginationButtons'
                />
              </div>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default AllFoods