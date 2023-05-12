import React from 'react';
import store from "../../stores/Store"
import './CartOverview.css';

const CartOverview = () => {

    return (<div className="CartOverview">
        <h2 style={{textAlign: 'center'}}>Cart Overview</h2>
        <table id="CartOverview">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
            </tr>
            {Array.from(store.cart).map(item => (
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                </tr>
            ))}
        </table>
    </div>);
}

export default CartOverview;