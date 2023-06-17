import React from 'react';
import './Searchbar.sass';
import { observer } from "mobx-react";
import store from "../../stores/Store"

const Searchbar = () => {
    return (
        <input type="text" placeholder="Search for your favorite fruits" onClick={() => store.setSearchValue("")} onChange={(e) => store.setSearchValue(e.target.value)} value={store.getSearchValue()} />
    );
}

export default observer(Searchbar);