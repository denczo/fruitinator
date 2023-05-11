import React from 'react';
import './Content.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductOverview from '../../screens/productOverview/ProductOverview';
import ProductInfo from '../../screens/productInfo/ProductInfo';

const Content = () => {
    return (<div className="Content">
        <Routes>
            <Route path="/" element={<ProductOverview/>} />
            <Route path="/info" element={<ProductInfo/>} />
        </Routes>
    </div>);
}

export default Content;