import React, { useState } from 'react';
import './ProductOverview.sass';
import data from '../../mockData/data';
import Product from './components/product/Product';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { AnimatePresence } from 'framer-motion';
// import CarouselSlider from './components/CarouselSlider/CarouselSlider';


function sortAscending(a, b) {
    if (a < b) //sort string ascending
        return -1;
    if (a > b)
        return 1;
    return 0; //default return value (no sorting)
}

function sortItems(items, sortOption) {
    switch (Number(sortOption)) {
        case 0:
            return items;
        case 1:
            return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase()));
        case 2:
            return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase())).reverse();
        case 3:
            return items.sort((a, b) => sortAscending(a.price, b.price));
        case 4:
            return items.sort((a, b) => sortAscending(a.price, b.price)).reverse();
        default:
            return items;
    }
}

const ProductOverview = () => {
    // why doesn't it work, when filteredItems is declared outside of this component?
    let filteredItems = data.filter(product => product.title.toLowerCase().includes(store.getSearchValue().toLowerCase()));
    let sortedItems = sortItems(filteredItems, store.getSortOption());

    return (<div className="ProductOverview">
        {/* <CarouselSlider /> */}
        <AnimatePresence>
            {sortedItems.map((product, index) =>
                <Product key={index} data={product} />
            )}
        </AnimatePresence>
    </div>);
}

export default observer(ProductOverview);