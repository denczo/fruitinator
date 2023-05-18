import React from 'react';
import store from "../../stores/Store"
import './CartOverview.css';
import Stepper from '../../navigation/stepper/Stepper';

const CartOverview = () => {

    let totalSum = 0;

    return (<div className="CartOverview">
        {store.getCartCount() > 0 ? (
            <>
                <h2 style={{ textAlign: 'center' }}>Cart Overview</h2>
                <table id="CartOverview">
                    {/* <tr> */}
                        {/* <th>Product</th> */}
                        {/* <th>Quantity</th> */}
                        {/* <th>Price</th> */}
                    {/* </tr> */}
                    <tbody>
                    {Array.from(store.cart).map(item => {
                        let sum = item.price / 100 * item.amount;
                        totalSum += sum;
                        return <tr>
                            <td><img key={item.name} src={item.image} alt=""></img></td>
                            <td>{item.name}</td>
                            <td><b>{sum.toFixed(2)+" $"}</b></td>
                            <td><Stepper data={item}/></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <h2 style={{ textAlign: 'right' }}>Order total: {totalSum} $</h2>
                <p style={{ textAlign: 'right' }}>Excluding shipping costs</p>
            </>) : (<h3 style={{ textAlign: 'center' }}>Your cart is empty</h3>)}
    </div>);
}

export default CartOverview;