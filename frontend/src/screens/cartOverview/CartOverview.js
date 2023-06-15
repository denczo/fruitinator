import React from 'react';
import store from "../../stores/Store"
import './CartOverview.css';
import Stepper from '../../navigation/stepper/Stepper';
import { observer } from "mobx-react";
import Remove from '../../navigation/buttons/remove/Remove';
import { motion } from 'framer-motion';

const CartOverview = () => {

    let totalSum = 0;
    return (<div id="CartContainer">
        {store.getCartCount() > 0 ? (
            <>
                <h2 style={{ textAlign: 'center' }}>Cart Overview</h2>
                <div id="CartOverview">
                    {Array.from(store.cart).map((item, index) => {
                        let sum = item.price / 100 * item.amount;
                        totalSum += sum;
                        return <motion.div
                            className='row'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            key={index}>
                            <div className='info'>
                                <div className='cell'>
                                    <img key={item.name} src={item.image} alt=""></img></div>
                                <div className='cell'>{item.name}</div>
                                <div className='cell'><b>{sum.toFixed(2) + " $"}</b></div>
                            </div>
                            <div className='cell'><Stepper data={item} /></div>
                            <div className='cell'><Remove data={item} /></div>
                        </motion.div>
                    })}
                </div>
                <h2 style={{ textAlign: 'right' }}>Order total: {totalSum.toFixed(2)} $</h2>
                <p style={{ textAlign: 'right' }}>Excluding shipping costs</p>
            </>) : (<h3 style={{ textAlign: 'center' }}>Your cart is empty</h3>)}
    </div>);
}

export default observer(CartOverview);