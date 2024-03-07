import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/ReduxStore.tsx';
import { sortItemsAscending, sortItemsDescending } from '../../features/productSlice.tsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sortbar = () => {

    const dispatch = useDispatch<AppDispatch>();

    const sortOption = (option: string) => {
        switch (option) {
            case 'ascending':
                dispatch(sortItemsAscending());
                break;
            case 'descending':
                dispatch(sortItemsDescending());
                break;
            default:
                break;
        }
    }

    return (<FormControl style={{ width: '200px' }}>
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
            labelId="sort-label"
            id="sort-select"
            value={'test'}
            label="Sort"
            onChange={(e) => sortOption(e.target.value)}
        >
            <MenuItem value={'relevancy'}>Relevancy</MenuItem>
            <MenuItem value={'ascending'}>Title: A - Z</MenuItem>
            <MenuItem value={'descending'}>Title: Z - A</MenuItem>
            <MenuItem value={''}>Price: Low - High</MenuItem>
            <MenuItem value={''}>Price: High - Low</MenuItem>
        </Select>
    </FormControl>);
}

export default Sortbar;