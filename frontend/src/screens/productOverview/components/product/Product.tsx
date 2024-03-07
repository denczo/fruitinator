import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import store from "../../../../stores/Store"
import './Product.sass';
import AddCorner from '../../../../navigation/buttons/add/addcorner/AddCorner.tsx';
import Favorites from '../../../../navigation/buttons/favorites/Favorites';

import { motion } from 'framer-motion';
import Loader from '../../../../navigation/loader/Loader';

const Product = ({ data }) => {

    const { fruit, price, image } = data;
    const [loading, setLoading] = useState(true);
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
        key={fruit}
    >
        <motion.div
            className="Product"
            whileHover={{ scale: 1.05 }}
            // layout
            onClick={() => handleClick(data)}>
                
            <div id='FavoritesPlacement'>
                <Favorites />
            </div>
            <div className='ProductContent'>
                <div><b>{fruit}</b></div>
                <div style={{ fontSize: 18 }}><b>{price}</b></div>
                {loading? <Loader /> : <></>}
                <img key={fruit} src={image} onLoad={() => setLoading(false)} loading="lazy" alt=""></img>
            </div>
            <AddCorner data={data} />
        </motion.div>
    </motion.div>);
}

export default Product;