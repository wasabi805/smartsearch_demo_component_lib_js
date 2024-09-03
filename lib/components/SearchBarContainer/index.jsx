
import {SearchBarPresenter} from '../SearchBarPresenter';
import { StateProvider } from '../../context/stateContext';

export const SearchBarContainer = ({ name, getSmartSeachState }) => {
    return(
        <StateProvider>
            <div id='smartsearch-searchbar-container'>
                Searchbar {name}
                <SearchBarPresenter getSmartSeachState={getSmartSeachState}/>
            </div>
        </StateProvider>
    );
};
