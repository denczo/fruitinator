import React from 'react';
import './Wrapper.css';
import {HashRouter as Router} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import CarouselSlider from '../../screens/productOverview/components/CarouselSlider/CarouselSlider';
// import CartOverview from '../../screens/cartOverview/CartOverview';
// import ProductInfo from '../screens/productInfo/ProductInfo';

const Wrapper = () => {
    return (<div className="Wrapper">
        <Router>
            <Header/>
            
            <Navbar/>
            {/* <CartOverview/> */}
            {/* <CarouselSlider/> */}
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default Wrapper;