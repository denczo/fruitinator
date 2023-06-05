import React from 'react';
import './Sortbar.css';
import { observer } from "mobx-react";

const Sortbar = ({options, setSelectedOption }) => {

    return (<div id="Sortbar">
        <select onChange={(e) => setSelectedOption(e.target.value)}>
            {options.map(element => <option value={element.value}>{element.label}</option>)}
        </select>
    </div>);
}

export default observer(Sortbar);