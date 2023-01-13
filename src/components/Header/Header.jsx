import React,{useRef,useEffect} from 'react'
import './Header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { Container, NavLink, Row } from "reactstrap";

const nav_links =[
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'shop',
        display: 'Shop'
    },
    {
        path:'cart',
        display: 'Cart'
    },
]
// import { NavLink } from 'react-router-dom';

const Header = () => {
    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop> 80 || 
                document.documentElement.scrollTop > 80){
                    headerRef.current.classList.add('sticky_header')
                }else{
                    headerRef.current.classList.remove('sticky_header')
                }
        });
    };

    useEffect(()=>{
        stickyHeaderFunc();

        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });

    const menuToogle = ()=> menuRef.current.classList.toogle('active_menu')
  return <header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className="nav_wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <div>
                        <h1>mulitimart</h1>
                    </div>
                </div>

                <div className="navigation" ref={menuRef} onClick={menuToogle}>
                    <ul className="menu">
                        {/* <li className="nav_item">
                            <NavLink to='home'>Home</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to='home'>Shop</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to='home'>Cart</NavLink>
                        </li> */}
                    {nav_links.map((item,index)=>(
                            <li className="nav_item" key={index}>
                            <NavLink
                             to={item.path}
                             className={(navClass)=> 
                            navClass.isActive ? 'nav_active':''}>
                            {item.display}
                            </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav_icons">

                    <span className='fav_icon'>
                        <i class="ri-heart-line"></i>
                    <span className="badge">1</span>
                    </span>
                    <span className='cart_icon'>
                    <i class="ri-shopping-bag-line"></i>
                    <span className="badge">1</span>
                    </span>
                    
                    <span>
                        <motion.img whileTap={{scale:1.2}}src={userIcon} alt="" />
                    </span>
                    <div className="mobile_menu">
                    <span onClick={menuToogle}>
                    <i class="ri-menu-line"></i>
                    </span>
                </div>
                </div>
                
            </div>
        </Row>
    </Container>

  </header>
}

export default Header