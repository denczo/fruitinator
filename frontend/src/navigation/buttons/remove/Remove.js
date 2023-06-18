import React from 'react';
import './Remove.sass';
import store from "../../../stores/Store"

const Remove = ({data}) => {
    return (<div className="Remove" onClick={() => store.deleteItemFromCart(data.name)}></div>);
}

export default Remove;