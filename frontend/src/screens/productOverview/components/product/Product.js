import React from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.css';
import Add from '../../../../navigation/buttons/add/Add';
import Favorites from '../../../../navigation/buttons/favorites/Favorites';

import { motion } from 'framer-motion';

const Product = ({ data }) => {

    const { title, price, image } = data;
    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate('/info')
        store.setProduct(data)
    };

    return (<motion.div
        className="ProductContainer"
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}
        transition={{ duration: 0.2 }}
        layout={'position'}
        key={title}
        >
            <motion.div
                className="Product"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleClick(data)}>
                <div id='FavoritesPlacement'>
                    <Favorites />
                </div>
                <div className='ProductContent'>
                    <div><b>{title}</b></div>
                    <div style={{fontSize: 20}}><b>{'$ ' + price / 100}</b></div>
                    <img key={title} src={image} alt=""></img>
                </div>
                <Add data={{ title, price, image }} />
            </motion.div>
        </motion.div>);
}

export default Product;