import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import products from '../assets/data/products'


import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css'

import { Row, Col, Container } from "reactstrap"
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import Clock from '../components/UI/Clock'

import counterImg from '../assets/images/counter-timer-img.png';

const Home = () => {
const [trendingProducts,setTrendingProducts] = useState([])
const [bestSalesProducts,setBestSalesProducts] = useState([])
const [mobileProducts,setMobileProducts] = useState([])
const [wirelessProducts,setWirelessProducts] = useState([])
const [popularProducts,setPopularProducts] = useState ([])

const year = new Date().getFullYear();

  useEffect(()=>{
    const filterdTrendingProducts = products.filter(
      item=> item.category === 'chair');

    const filterdBestSalesProducts = products.filter(
      item=> item.category === 'sofa');

    const filterdMobileProducts = products.filter(
      item=> item.category === 'mobile');

    const filterdWirelessProducts = products.filter(
      item=> item.category === 'wireless');

    const filterPopularProduts = products.filter(
      item=> item.category === 'watch'
    )

    setTrendingProducts(filterdTrendingProducts);
    setBestSalesProducts(filterdBestSalesProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filterdWirelessProducts)
    setPopularProducts(filterPopularProduts);

  },[]);

  return (
    <Helmet title={"Home"}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="hero-content">
              <p className="hero_subtitle"> Trending product in  {year}
              </p>
              <h2>Make your Interior More Minimalistic & Modern</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, magni? Minus obcaecati vel molestiae, quas vero labore. Mollitia, tempora minus.</p>

              <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    
    <section className="trending_products">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data ={trendingProducts}/>
          </Row>
        </Container>
    </section>

    <section className="best_sales">
        <Container>
        <Row>
              <Col lg='12' className='text-center'>
                <h2 className="section_title">Best sales</h2>
              </Col>

              <ProductList data={bestSalesProducts}/>

            </Row>
        </Container>
    </section>

    <section className="timer_count">
      <Container>
        <Row>
          <Col lg='6' md='12' className="count_down_col">

            <div className="clock_top_content">
              <h4 className="text-white fs-6 mb-2">Limited offers</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button 
            whileTap={{scale:1.2}} 
            className="buy_btn_store_btn">
            <Link to='/shop'>Visit Store</Link></motion.button>
            
          </Col>

          <Col lg='6' md='12' className="text-end counter_img">
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new_arivals">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5' >
                <h2 className="section_title">New Arrivals</h2>
        </Col>
        <ProductList data={mobileProducts}/>
        <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
    </section>

    <section className="popular_category">
    <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
                <h2 className="section_title">Popular in Category</h2>
        </Col>
        <ProductList data={popularProducts}/>
        </Row>
      </Container>
    </section>

  </Helmet>
);
};

export default Home