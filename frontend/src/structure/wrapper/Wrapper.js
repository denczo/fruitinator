import React from 'react';
import './Wrapper.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
// import ProductInfo from '../screens/productInfo/ProductInfo';

const Wrapper = () => {
    return (<div className="Wrapper">
        <Router>
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default Wrapper;