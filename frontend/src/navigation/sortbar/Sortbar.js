import React from 'react';
import './Sortbar.sass';
import { observer } from "mobx-react";
import store from "../../stores/Store"

const Sortbar = ({options}) => {

    return (<div id="Sortbar">
        <div className="ElementWrapper">
        <select onChange={(e) => {store.setSortOption(e.target.value)}}>
            {options.map((element, index) => <option key={index} value={element.value}>{element.label}</option>)}
        </select>
        </div>
    </div>);
}

export default observer(Sortbar);