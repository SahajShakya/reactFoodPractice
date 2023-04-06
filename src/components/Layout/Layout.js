import React from 'react';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Routers from '../../routes/Routers';
import { useSelector } from 'react-redux';
import Cart from '../UI/cart/Cart';

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartIsVisible)

  return (
    <>
        <div>
            <Header />
            { 
              showCart && <Cart />
            }
            <div>
                <Routers />
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Layout

