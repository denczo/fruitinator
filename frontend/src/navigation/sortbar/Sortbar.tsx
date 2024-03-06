import React from 'react';
import './Sortbar.sass';
import { useDispatch } from 'react-redux';
import { AppDispatch, sortItemsAscending, sortItemsDescending } from '../../stores/ReduxStore.tsx';

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

    return (<div id="Sortbar">
        <div className="ElementWrapper">
            <select onChange={(e) => sortOption(e.target.value)}>
                <option >Relevancy</option>
                <option value={'ascending'}>Title: A - Z</option>
                <option value={'descending'}>Title: Z - A</option>
                <option>Price: Low - High</option>
                <option>Price: High - Low</option>
            </select>
        </div>
    </div>);
}

export default Sortbar;