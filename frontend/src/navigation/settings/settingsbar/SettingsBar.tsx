import React from 'react';
import Box from '@mui/material/Box';
import SortOption from '../elements/SortOption.tsx';
import PageSelector from '../elements/PageSelector.tsx';

const SettingsBar = () => {

    return (<Box display="flex" justifyContent="space-between" pb={3} alignItems="center">
        <SortOption />
        <PageSelector />
    </Box>);
}

export default SettingsBar;