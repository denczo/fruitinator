import React from 'react';
import store from "../../stores/Store"
import './CartOverview.sass';
import Stepper from '../../navigation/stepper/Stepper.tsx';
import { observer } from "mobx-react";
import Remove from '../../navigation/buttons/remove/Remove';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores/ReduxStore';

const CartOverview = () => {
    // const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.cart)
    let totalSum = 0;
    return (<div id="CartContainer">
        {items.totalAmount > 0 ? (
            <>
                <h2 style={{ textAlign: 'center' }}>Cart Overview</h2>
                <div id="CartOverview">
                    {Array.from(items.items).map((item, index) => {
                        totalSum += item.totalPrice;
                        return <motion.div
                            className='row'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            key={index}>
                            <div className='info'>
                                <div className='cell'>
                                    <img key={item.item.fruit} src={item.item.image} alt=""></img></div>
                                <div className='cell'>{item.item.fruit}</div>
                                <div className='cell'><b>{item.totalPrice + " $"}</b></div>
                            </div>
                            <div className='cell'><Stepper data={item} /></div>
                            <div className='cell'><Remove data={item} /></div>
                        </motion.div>
                    })}
                </div>
                <h2 style={{ textAlign: 'right', marginRight: '5px' }}>Order total: {totalSum.toFixed(2)} $</h2>
                <p style={{ textAlign: 'right', marginRight: '5px' }}>Excluding shipping costs</p>
            </>) : (<h3 style={{ textAlign: 'center' }}>Your cart is empty</h3>)}
    </div>);
}

export default observer(CartOverview);