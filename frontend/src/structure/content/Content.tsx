import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductOverview from '../../screens/productOverview/ProductOverview.tsx';
import ProductInfo from '../../screens/productInfo/ProductInfo.js';
import CartOverview from '../../screens/cartOverview/CartOverview.js';
import Settingsbar from '../../navigation/settingsbar/Settingsbar.tsx';
import Box from '@mui/material/Box';

const Content = () => {
    return (<Box display="flex" justifyContent="center" mt={2} mb={2}>
        <Box maxWidth="1080px">
            <Settingsbar />
            <Routes>
                <Route path="/" element={<ProductOverview />} />
                <Route path="/info" element={<ProductInfo />} />
                <Route path="/cart" element={<CartOverview />} />
            </Routes>
        </Box>
    </Box>
    );
}

export default Content;