import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.css';
import Add from '../../../../navigation/buttons/add/Add';
import { motion } from 'framer-motion';

const Product = ({ data }) => {

    const { title, backgroundColor, price, image } = data;
    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate('/info')
        store.setProduct(data)
    };

    return (<motion.div
        className="Product"
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}
        layout
        key={title}
        onClick={() => handleClick(data)}>
        <div className='ProductContent'>
            <div><b>{title}</b></div>
            <div><b>{'$ ' + price / 100}</b></div>
            <img key={title} src={image} alt=""></img>
        </div>
        <Add data={{ title, price, image }} />
    </motion.div>);
}

export default Product;