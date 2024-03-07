import React from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../stores/ReduxStore';

const PageSelector = () => {
    const dispatch = useDispatch<AppDispatch>();
    const items = useSelector((state: RootState) => state.product.items)
    
    return <Pagination count={items.amountPages} siblingCount={0} boundaryCount={1} shape="rounded" variant="outlined"/>;
}

export default PageSelector;