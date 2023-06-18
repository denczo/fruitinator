import React from 'react';
import './AddCorner.sass';
import store from "../../../../stores/Store"

const AddCorner = (data) => {
    return (<div className="AddCorner" onClick={(e) => { e.stopPropagation(); store.addItemToCart(data) }}>
        {"+"}
    </div>);
}

export default AddCorner;