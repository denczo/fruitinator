import React from 'react';
import './Wrapper.sass';
import {HashRouter as Router, useLocation} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content.tsx';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sortbar from '../../navigation/sortbar/Sortbar.tsx';
// import CarouselSlider from '../../screens/productOverview/components/CarouselSlider/CarouselSlider';
import { observer } from "mobx-react";

const Wrapper = () => {

    return (<div className="Wrapper">
        <Router>
            <Header/>
            <Navbar/>
            <Sortbar/>
            {/* <CarouselSlider/> */}
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default observer(Wrapper);