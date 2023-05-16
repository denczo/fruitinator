import React from 'react';
import store from "../../stores/Store"
import './CartOverview.css';

const CartOverview = () => {

    let totalSum = 0;

    return (<div className="CartOverview">
        <h2 style={{textAlign: 'center'}}>Cart Overview</h2>
        <table id="CartOverview">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {Array.from(store.cart).map(item => {
                let sum = item.price/100 * item.amount;
                totalSum += sum;
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{sum}</td>
                </tr>
            })}
        </table>
        <h3>Order total {totalSum} $</h3>
    </div>);
}

export default CartOverview;