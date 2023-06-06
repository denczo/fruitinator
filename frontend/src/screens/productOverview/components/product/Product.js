import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.css';
import Add from '../../../../navigation/buttons/add/Add';
import { motion } from 'framer-motion';
import Favorites from '../../../../navigation/buttons/favorites/Favorites';

const productMotion = {
        initial: { scale: 1 },
        hover: { scale: 1.05 }
}




const Product = ({ data }) => {

    const { title, price, image } = data;
    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate('/info')
        store.setProduct(data)
    };


    return (<motion.div
        className="Product"
        // variants={productMotion}
        // whileHover={{ scale: 1.05 }}

        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}
        variants={productMotion}
        // whileHover={{ scale: 1.05 }}
        layout={'position'}
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