import React, { useState } from 'react';
import './ProductOverview.css';
import data from '../../mockData/data';
import Product from './components/product/Product';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { AnimatePresence } from 'framer-motion';
// import CarouselSlider from './components/CarouselSlider/CarouselSlider';
import Sortbar from '../../navigation/sortbar/Sortbar';

const options = [
    { value: 0, label: "default"},
    { value: 1, label: "asc alphabetical"},
    { value: 2, label: "desc alphabetical"},
    { value: 3, label: "asc price"},
    { value: 4, label: "desc price"}]

function sortAscending (a, b){
    if (a < b) //sort string ascending
     return -1;
    if (a > b)
     return 1;
    return 0; //default return value (no sorting)
}

function sortItems(items, sortOption){
    switch(sortOption){
        case 0:
            console.log("OPTION 0")
            return items;
        case 1: 
            console.log("OPTION 1")
            return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase()));
        case 2:
            console.log("OPTION 2")
            return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase())).reverse();
        case 3:
            console.log("OPTION 3")
            return items.sort((a, b) => sortAscending(a.price, b.price));
        case 4:
            console.log("OPTION 4")
            return items.sort((a, b) => sortAscending(a.price, b.price)).reverse();
        default:
            return items;
    }
}


const ProductOverview = () => {

    const [sortOption, setSortOption] = useState(0);
    // const [filteredItems, filterItems] = useState([])

    const sortItems =  (items, sortOption) => {
        switch(sortOption){
            case 0:
                console.log("OPTION 0")
                return items;
            case 1: 
                console.log("OPTION 1")
                return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase()));
            case 2:
                console.log("OPTION 2")
                return items.sort((a, b) => sortAscending(a.title.toLowerCase(), b.title.toLowerCase())).reverse();
            case 3:
                console.log("OPTION 3")
                return items.sort((a, b) => sortAscending(a.price, b.price));
            case 4:
                console.log("OPTION 4")
                return items.sort((a, b) => sortAscending(a.price, b.price)).reverse();
            default:
                return items;
        }
    }
    // why doesn't it work, when filteredItems is declared outside of this component?
    const sortedItems = sortItems(data, sortOption)
    console.log("Test")
    // let filteredItems = data.filter(product => product.title.toLowerCase().includes(store.getSearchValue().toLowerCase()));
    // let newfilteredItems = sortItems(filteredItems, sortOption);
    
    // filterItems(filtered)
    // let sorted = sortItems(filteredItems, sortOption);
    // filterItems(sorted)

    // useEffect(() => {
    //     let sorted = sortItems(filteredItems, sortOption);
    //     filterItems(sorted)
    //     console.log("Triggered")
    // }, [sortOption])

    return (<div className="ProductOverview">
        {/* <CarouselSlider /> */}
        {sortOption}
        <Sortbar options={options} setSelectedOption={setSortOption}/>
        <AnimatePresence>
            {sortedItems.map((product, index) =>
                <Product key={index} data={product} /> 
            )}
        </AnimatePresence>
    </div>);
}

export default observer(ProductOverview);