import React from 'react';
import './Stepper.css';
import store from "../../stores/Store"

const Stepper = ({data}) => {
    console.log("THIIS",data.name, data.price, data.amount)
    return (<div className="Stepper">
        <div id="Plus" onClick={() => store.addItemToCart(data.name, data.amount, data.price, data.image)}>{"+"}</div>
        <div id="Indicator">{data.amount}</div>
        <div id="Minus" onClick={() => store.addItemToCart(data.name, Number(-1), data.price, data.image)}>{"-"}</div>
    </div>);
}

export default Stepper;