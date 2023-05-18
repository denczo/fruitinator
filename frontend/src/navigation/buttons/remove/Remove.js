import React from 'react';
import './Remove.css';
import store from "../../../stores/Store"

const Remove = (name, amount, price, image) => {
    return (<div className="Add" onClick={(e) => {e.stopPropagation(); store.addItemToCart(name, amount, price, image)}}>
        {"-"}
    </div>);
}

export default Remove;