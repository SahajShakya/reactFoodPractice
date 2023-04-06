import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../store/shoppingCart/cartSlice";

import '../../styles/productCard.css'

const ProductCard = (props) => {

    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch();

    const addToCard = () => {
      dispatch(cartActions.addItem({
        id,
        title,
        image01,
        price,
      }))
    }

  return (
    <>
       <div className="product__item">
        <div className="product__img">
            <img src={image01} alt="product_img" className='w-50'/>
        </div>
        <div className="product__content">
            <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
            <div className='d-flex flex-column align-items-center justify-content-between'>
                <span className="product__price">${price}</span>
                <button className='addToCart__btn' onClick={addToCard}>Add to Cart</button>
            </div>
        </div>
       </div> 
    </>
  )
}

export default ProductCard