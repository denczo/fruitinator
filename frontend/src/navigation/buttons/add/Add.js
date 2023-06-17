import React from 'react';
import './Add.sass';
import store from "../../../stores/Store"

const Add = (data) => {
    return (<div className="Add" onClick={(e) => {e.stopPropagation(); store.addItemToCart(data)}}>
        {"+"}
    </div>);
}

export default Add;