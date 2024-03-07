import React from 'react';
import './AddCorner.sass';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../stores/ReduxStore';
import { addItem } from '../../../../features/cartSlice.tsx';
import { Item } from '../../../../interfaces.ts';

const AddCorner = (item) => {
    const dispatch = useDispatch<AppDispatch>();

    return (<div className="AddCorner" onClick={(e) => { e.stopPropagation(); dispatch(addItem(item.data))}}>
        {"+"}
    </div>);
}

export default AddCorner;