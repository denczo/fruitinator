import React from 'react';
import './Wrapper.sass';
import {HashRouter as Router} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
// import CarouselSlider from '../../screens/productOverview/components/CarouselSlider/CarouselSlider';

const Wrapper = () => {
    return (<div className="Wrapper">
        <Router>
            <Header/>
            <Navbar/>
            {/* <CarouselSlider/> */}
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default Wrapper;