import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import { cartUiActions } from "../../../store/shoppingCart/cartUiSlice";

import "../../styles/shopping_cart.css";

const Carts = () => {

    const dispatch = useDispatch();
    const toggleCart = () => {
        dispatch(
            cartUiActions.toggle()
        )
    }   

    const cartProducts = useSelector( state => state.cart.cartItems) ///inside cartSlice
    const totalAmount = useSelector((state) => state.cart.totalAmount); ///show total
      
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
            {
                cartProducts.length === 0 ? 
                    <h6 className="text-center mt-5">No item added to cart</h6> 
                        : 
                    cartProducts.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))
                    
            }
            
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;