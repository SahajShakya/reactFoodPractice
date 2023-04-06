import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import { cartUiActions } from '../../store/shoppingCart/cartUiSlice';

import logo from '../../assets/images/res-logo.png'
import '../styles/header.css'


const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Carts',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    },
]


const Header = () => {
    
    const menuRef = useRef();
    const headerRef = useRef();

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80 ) {
                headerRef.current.classList.add('header__shrink');
            }
            else {
                headerRef.current.classList.remove('header__shrink');
            }
        })
        return () => window.removeEventListener('scroll')
    }, [])
    

    return (
        <>
            <header className="header" ref={headerRef}>
                <Container>
                    <div className="nav__wrapper d-flex justify-content-between align-items-center ">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <h5>Tasty Treats</h5>
                        </div>

                        {/* Menu item goes here */}
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu d-flex align-items-center gap-5">
                                {
                                    nav__links.map((nav, index) => (
                                        <NavLink 
                                            to={nav.path} 
                                            key={index}  
                                            className={navClass => navClass.isActive ? 'active__menu':''}
                                            >
                                            {nav.display}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Nav right Icons */}
                        <div className="nav__right d-flex align-items-center gap-4" >
                            <span className="cart__icon" onClick={toggleCart}>
                                <i class="ri-shopping-cart-line">
                                    <span className="cart__badge">{ totalQuantity }</span>
                                </i>
                            </span>

                            <span className="user">
                                <Link to='/login'>
                                    <i class="ri-user-line"></i>
                                </Link>
                            </span>

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i class="ri-menu-line"></i>
                            </span>

                        </div>

                    </div>
                </Container>

            </header>
        </>
    )
}

export default Header


  