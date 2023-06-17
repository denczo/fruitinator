import React from 'react';
import './Content.sass';
import {Route, Routes} from 'react-router-dom';
import ProductOverview from '../../screens/productOverview/ProductOverview';
import ProductInfo from '../../screens/productInfo/ProductInfo';
import CartOverview from '../../screens/cartOverview/CartOverview';

const Content = () => {
    return (<div className="Content">
        <Routes>
            <Route path="/" element={<ProductOverview/>} />
            <Route path="/info" element={<ProductInfo/>} />
            <Route path="/cart" element={<CartOverview/>} />
        </Routes>
    </div>);
}

export default Content;