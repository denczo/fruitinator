import React from 'react';
import './Wrapper.sass';
import {HashRouter as Router, useLocation} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar.js';
import Content from '../Content.tsx';
import Footer from '../Footer.tsx';
import Header from '../Header.tsx';
import { observer } from "mobx-react";

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

export default observer(Wrapper);