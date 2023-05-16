import React from 'react';
import './Cart.css';
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom"
import store from "../../../stores/Store"

const Cart = () => {
    let navigate = useNavigate();
    const cartCount = store.getCartCount()
    return (<div className="Cart" onClick={() => navigate("/cart")}>
        <div className="Bucket">
            {cartCount > 0 ? (
                <div key={cartCount} className="CircleAnimation">
                    {cartCount}
                </div>
            ) :
                (<div>
                    <b>{cartCount}</b>
                </div>)}
        </div>
    </div>);
}

export default observer(Cart);