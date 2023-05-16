import React from 'react';
import './Add.css';
import store from "../../../stores/Store"

const Add = (name, amount, price) => {
    return (<div className="Add" onClick={(e) => {e.stopPropagation(); store.addItemToCart(name, amount, price)}}>
        {"+"}
    </div>);
}

export default Add;