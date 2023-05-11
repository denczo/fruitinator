import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.css';

    const Product = ({data}) => {

    const { title, backgroundColor, price, image} = data;

    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate('/info')
        store.setProduct(data)
    };

    return (<div className="Product color" onClick={() => handleClick(data)} style={{borderColor: backgroundColor}}>
        <div><b>{title}</b></div>
        <div><b>{'$ '+price/100}</b></div>
        <img key={image} src={image}></img>
    </div>);
}

export default Product;