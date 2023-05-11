import React from 'react';
import './ProductOverview.css';
import data from '../../mockData/data';
import Product from './components/product/Product';
import { observer } from "mobx-react";
import store from "../../stores/Store"

const ProductOverview = () => {
    // why doesn it work, if filteredItems is declared outside of this component?
    const filteredItems = data.filter(product => product.title.toLowerCase().includes(store.getSearchValue()));

    return (<div className="ProductOverview">
        {filteredItems.map((product, index) =>
            <Product key={index} data={product} />
        )
        }
    </div>);
}

export default observer(ProductOverview);