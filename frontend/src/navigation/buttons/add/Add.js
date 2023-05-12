import React from 'react';
import './Add.css';
import store from "../../../stores/Store"
// import { observer } from "mobx-react";



const Add = (name, amount) => {
    return (<div className="Add" onClick={() => store.addItemToCart(name, amount)}>
        {"+"}
        {/* <p>{"+"}</p> */}
    </div>);
}

export default Add;