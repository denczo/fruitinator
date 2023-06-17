import React from 'react';
import './ProductInfo.sass';
import { toJS } from 'mobx'
import store from "../../stores/Store"
import Add from '../../navigation/buttons/add/Add';

const ProductInfo = () => {

    const data = toJS(store.getProduct())

    return (<div className='ProductInfo'>
        <div id='Details'>
            <img key={data.image} alt={data.title} src={data.image}></img>
            <Add data={{ title: data.title, price: data.price, image: data.image }} />
            <div id='Title'>
                <h2>{data.title}</h2>
                <h2>{'$ ' + data.price / 100}</h2>
            </div>
            <b>Info</b>
            <p>{data.description}</p>
        </div>
        <table id="NutritionInfo">
            <tr><b>Nutrition Facts</b></tr>
            <tbody>
                {Object.entries(data.nutritionInfo).map(([name, value]) => {
                    return <tr>
                        <td>{name}</td>
                        <td>{value}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>);
}

export default ProductInfo;