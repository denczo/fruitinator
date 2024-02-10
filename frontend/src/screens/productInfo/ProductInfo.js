import React, { useState } from 'react';
import './ProductInfo.sass';
import { toJS } from 'mobx'
import store from "../../stores/Store"
import AddText from '../../navigation/buttons/add/addtext/AddText';
import { motion } from 'framer-motion';
import Favorites from '../../navigation/buttons/favorites/Favorites';
// import MapChart from '../map/Map';
import 'chart.js/auto';
import BarChart from '../chart/Chart';
const ProductInfo = () => {

    const data = toJS(store?.getProduct())
  
    return (<div className='ProductInfo'>

        <div id='Details'>
            <Favorites />
            <img key={data.image} alt={data.fruit} src={data.image}></img>
            <div id='Title'>
                <div>
                    <div className="ph">{data.fruit}</div>
                    <div className="ph">{data.price}</div>
                </div>
                <AddText data={{ title: data.title, price: data.price, image: data.image }} />

            </div>
        </div>
        <div id="NutritionInfo">
            <b>Info</b>
            <p>{data.info}</p>
            <b>Nutrition facts per 100g</b>
            <p></p>
            <BarChart data={data.nutrition}/>
        </div>
        {/* <MapChart /> */}
    </div>);
}

export default ProductInfo;