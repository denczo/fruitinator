import React from 'react';
import './Wrapper.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';
// import ProductInfo from '../screens/productInfo/ProductInfo';

const Wrapper = () => {
    return (<div className="Wrapper">
        <Router>
            <h2>Fruitinator | healthy food ... always</h2>
            <Navbar/>
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default Wrapper;