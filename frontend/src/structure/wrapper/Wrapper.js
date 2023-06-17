import React from 'react';
import './Wrapper.sass';
import {HashRouter as Router} from 'react-router-dom';
import Navbar from '../../navigation/navbar/Navbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sortbar from '../../navigation/sortbar/Sortbar';
// import CarouselSlider from '../../screens/productOverview/components/CarouselSlider/CarouselSlider';
import { observer } from "mobx-react";

const options = [
    { value: 0, label: "Relevancy" },
    { value: 1, label: "Title: A - Z" },
    { value: 2, label: "Title: Z - A" },
    { value: 3, label: "Price: Low - High" },
    { value: 4, label: "Price: High - Low" }]

const Wrapper = () => {
    return (<div className="Wrapper">
        <Router>
            <Header/>
            <Navbar/>
            <Sortbar options={options}/>
            {/* <CarouselSlider/> */}
            <Content/>
            <Footer/>
        </Router>
    </div>);
}

export default observer(Wrapper);