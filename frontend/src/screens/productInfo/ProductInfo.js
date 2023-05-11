import React from 'react';
import './ProductInfo.css';
import { toJS } from 'mobx'
import store from "../../stores/Store"

const ProductInfo = () => {

    const data = toJS(store.getProduct())

    return (<div className='ProductInfo'>
        <div><b>{data.title}</b></div>
        <div><b>{'$ '+data.price/100}</b></div>
        <img key={data.image} src={data.image}></img>
        <p><b>Product Description</b></p>
        <p>{data.description}</p>
    </div>);
}

export default ProductInfo;