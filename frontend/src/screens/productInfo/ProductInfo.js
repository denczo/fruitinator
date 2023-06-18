import React from 'react';
import './ProductInfo.sass';
import { toJS } from 'mobx'
import store from "../../stores/Store"
import AddText from '../../navigation/buttons/add/addtext/AddText';
import { motion } from 'framer-motion';
import Favorites from '../../navigation/buttons/favorites/Favorites';

const ProductInfo = () => {

    const data = toJS(store.getProduct())

    return (<div className='ProductInfo'>
        <div id='Details'>
            <Favorites />
            <img key={data.image} alt={data.title} src={data.image}></img>
            <div id='Title'>
                <div>
                    <div className="ph">{data.title}</div>
                    <div className="ph">{'$ ' + data.price / 100}</div>
                </div>
                <AddText data={{ title: data.title, price: data.price, image: data.image }} />

            </div>
            <b>Info</b>
            <p>{data.description}</p>
        </div>
        <div id="NutritionInfo">
            <b>Nutrition Facts</b>
            <p></p>
            {Object.entries(data.nutritionInfo).map(([name, value], index) => {
                return <motion.div
                    className='row'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    key={index}>
                    <div className='cell'>{name}</div>
                    <div className='cell'><b>{value}</b></div>
                </motion.div>
            })}
        </div>
    </div>);
}

export default ProductInfo;