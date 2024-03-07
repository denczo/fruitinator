import React from 'react';
import './Searchbar.sass';
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom"
import { AppDispatch } from '../../stores/ReduxStore';
import { useDispatch } from 'react-redux';
import { filterItems } from '../../features/productSlice.tsx';

const Searchbar = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    return (
        <input type="text" placeholder="Search for your favorite fruits" onClick={() => {navigate("/")}} onChange={(e) => dispatch(filterItems(e.target.value))}/>
    );
}

export default observer(Searchbar);