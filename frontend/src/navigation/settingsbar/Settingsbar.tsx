import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Sortbar from '../sortbar/Sortbar.tsx';

const Settingsbar = () => {

    return (<Box display="flex" justifyContent="space-between" pb={3} alignItems="center">
        <Sortbar />
        <Pagination count={3} siblingCount={0} boundaryCount={1} shape="rounded" variant="outlined"/>
    </Box>);
}

export default Settingsbar;