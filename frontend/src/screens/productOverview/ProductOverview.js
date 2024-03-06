import React, { useEffect, useState } from 'react';
import './ProductOverview.sass';
import Product from './components/product/Product';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { AnimatePresence } from 'framer-motion';
import { fetchProductPage, selectItems } from '../../stores/ReduxStore';
// import CarouselSlider from './components/CarouselSlider/CarouselSlider';
import { useSelector, useDispatch } from 'react-redux'



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
            return items.sort((a, b) => sortAscending(a.fruit.toLowerCase(), b.fruit.toLowerCase()));
        case 2:
            return items.sort((a, b) => sortAscending(a.fruit.toLowerCase(), b.fruit.toLowerCase())).reverse();
        case 3:
            return items.sort((a, b) => sortAscending(a.price, b.price));
        case 4:
            return items.sort((a, b) => sortAscending(a.price, b.price)).reverse();
        default:
            return items;
    }
}

async function fetchDataJSON() {
    const response = await fetch('http://localhost:9000/products');
    const data = await response.json();
    return data;
}

async function fetchPage(page) {
    const response = await fetch(`http://localhost:9000/products/${page}`);
    const data = await response.json();
    return data;
}


const ProductOverview = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectItems)

    const [sortedItems, setData] = useState([]);
    const [page, setPage] = useState(1);
    // why doesn't it work, when filteredItems is declared outside of this component?
    // let filteredItems = sortedItems?.items.filter(product => product.title.toLowerCase().includes(store.getSearchValue().toLowerCase()));
    // let sortedItems = sortItems(filteredItems, store.getSortOption());

    const paginationElement = (pages) => {
        const divs = [];

        for (let i = 0; i < pages; i++) {
            divs.push(<button key={i + 1} className={`tw-join-item tw-btn ${i + 1 === page ? "tw-btn-active" : ""}`} onClick={() => setPage(i + 1)}>{i}</button>);
        }
        return <div className="tw-join tw-justify-center">{divs}</div>;
    }


    useEffect(() => {
        // fetchPage(page).then(data => setData(data))
        dispatch(fetchProductPage(page))
        console.log(JSON.stringify(items))
        // console.log(JSON.stringify(items))
    }, [page]);


    return (<div className="Container">
        <div className="ProductOverview">
            {/* <CarouselSlider /> */}
            <AnimatePresence>
                {items ?
                    items?.items?.map((product, index) =>
                        <Product key={index} data={product} />
                    ) : <h3>Nothing found</h3>}
            </AnimatePresence>

        </div>
        {paginationElement(sortedItems?.totalPages)}
    </div>);
}

export default observer(ProductOverview);