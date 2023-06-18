import React from 'react';
import './AddText.sass';
import store from "../../../../stores/Store"

const AddText = (data) => {
    return (<div className="AddText" onClick={(e) => { e.stopPropagation(); store.addItemToCart(data) }}>
            <b>{"Add to cart"}</b>
        </div>);
}

export default AddText;