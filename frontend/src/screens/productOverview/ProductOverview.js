import React from 'react';
import './ProductOverview.css';
import data from '../../mockData/data';
import Product from './components/product/Product';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { AnimatePresence } from 'framer-motion';
import CarouselSlider from './components/CarouselSlider/CarouselSlider';


const ProductOverview = () => {
    // why doesn it work, if filteredItems is declared outside of this component?
    const filteredItems = data.filter(product => product.title.toLowerCase().includes(store.getSearchValue()));

    return (<div className="ProductOverview">
        {/* <CarouselSlider /> */}
        <AnimatePresence>
            {filteredItems.map((product, index) =>
                <Product key={index} data={product} /> 
            )}
        </AnimatePresence>
    </div>);
}

export default observer(ProductOverview);