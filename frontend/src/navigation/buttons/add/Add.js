import React from 'react';
import './Add.css';
import store from "../../../stores/Store"

const Add = (data) => {
    return (<div className="Add" onClick={(e) => {e.stopPropagation(); store.addItemToCart(data)}}>
        {"+"}
    </div>);
}

export default Add;