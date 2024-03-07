import React from 'react';
import './Cart.sass';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/ReduxStore';

const Cart = () => {
    let navigate = useNavigate();
    const cartCount = useSelector((state: RootState) => state.cart.totalAmount)

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

export default Cart;