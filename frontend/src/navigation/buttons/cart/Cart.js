import React from 'react';
import './Cart.css';
import { observer } from "mobx-react";
import store from "../../../stores/Store"

const Cart = () => {
    return (<div className="Cart" onClick={() => null}>
        <div className="Bucket">{store.getCartCount()}</div>
    </div>);
}

export default observer(Cart);