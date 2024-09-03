import React from 'react';
import {SearchBarPresenter} from '../SearchBarPresenter';
import { StateProvider } from '../../context/stateContext';

export const SearchBarContainer = ({ name }) => {
    return(
        <StateProvider>
            <div id='smartsearch-searchbar-container'>
                Searchbar {name}
                <SearchBarPresenter />
            </div>
        </StateProvider>
    );
};
