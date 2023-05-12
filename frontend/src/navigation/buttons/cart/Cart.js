import React from 'react';
import './Cart.css';
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom"
import store from "../../../stores/Store"

const Cart = () => {
    let navigate = useNavigate();
    return (<div className="Cart" onClick={() => navigate("/cart")}>
        <div className="Bucket">{store.getCartCount()}</div>
    </div>);
}

export default observer(Cart);