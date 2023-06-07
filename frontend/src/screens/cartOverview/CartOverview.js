import React from 'react';
import store from "../../stores/Store"
import './CartOverview.css';
import Stepper from '../../navigation/stepper/Stepper';
import { observer } from "mobx-react";

const CartOverview = () => {

    let totalSum = 0;

    return (<div>
        {store.getCartCount() > 0 ? (
            <>
                <h2 style={{ textAlign: 'center' }}>Cart Overview</h2>
                <table id="CartOverview">
                    <tbody>
                    {Array.from(store.cart).map((item, index) => {
                        let sum = item.price / 100 * item.amount;
                        totalSum += sum;
                        return <tr key={index}>
                            <td><img key={item.name} src={item.image} alt=""></img></td>
                            <td>{item.name}</td>
                            <td><b>{sum.toFixed(2)+" $"}</b></td>
                            <td><Stepper data={item}/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <h2 style={{ textAlign: 'right' }}>Order total: {totalSum.toFixed(2)} $</h2>
                <p style={{ textAlign: 'right' }}>Excluding shipping costs</p>
            </>) : (<h3>Your cart is empty</h3>)}
    </div>);
}

export default observer(CartOverview);