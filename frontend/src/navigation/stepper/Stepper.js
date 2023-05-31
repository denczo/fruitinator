import React from 'react';
import './Stepper.css';
import store from "../../stores/Store"

const Stepper = ({data}) => {
    return (<div className="Stepper">
        <div id="Plus" onClick={() => store.increaseItemAmount(data.name)}>{"+"}</div>
        <div id="Indicator">{data.amount}</div>
        <div id="Minus" onClick={() => store.decreaseItemAmount(data.name)}>{"-"}</div>
    </div>);
}

export default Stepper;