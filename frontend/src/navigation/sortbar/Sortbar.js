import React from 'react';
import './Sortbar.sass';
import { observer } from "mobx-react";
import store from "../../stores/Store"
import { useLocation } from 'react-router-dom';

const Sortbar = ({ options }) => {

    return (<>
        {useLocation().pathname === "/" ? <div id="Sortbar">
            <div className="ElementWrapper">
                <select onChange={(e) => store.setSortOption(e.target.value)}>
                    {options.map((element, index) => <option key={index} value={element.value}>{element.label}</option>)}
                </select>
            </div>
        </div> : <></>
        }
    </>);
}

export default observer(Sortbar);