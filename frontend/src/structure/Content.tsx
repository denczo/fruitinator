import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductOverview from '../screens/productOverview/ProductOverview.tsx';
import ProductInfo from '../screens/productInfo/ProductInfo.js';
import CartOverview from '../screens/cartOverview/CartOverview.tsx';
import SettingsBar from '../navigation/settings/settingsbar/SettingsBar.tsx';
import Box from '@mui/material/Box';

const Content = () => {
    return (<Box display="flex" justifyContent="center" mt={2} mb={2}>
        <Box maxWidth="1080px">
            <SettingsBar />
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