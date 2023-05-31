import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.css';
import Add from '../../../../navigation/buttons/add/Add';

    const Product = ({data}) => {

    const { title, backgroundColor, price, image} = data;
    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate('/info')
        store.setProduct(data)
    };

    return (<div className="Product color" onClick={() => handleClick(data)} style={{borderColor: backgroundColor}}>
        <div className='ProductContent'>
            <div><b>{title}</b></div>
            <div><b>{'$ '+price/100}</b></div>
            <img key={title} src={image} alt=""></img>
        </div>
        <Add data={{title, price, image}}/>
    </div>);
}

export default Product;