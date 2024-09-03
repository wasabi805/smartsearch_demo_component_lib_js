
import { useEffect , useState} from 'react';
import { useStateContext } from "../../context/stateContext";
import { usePrevious } from '../../hooks/usePrevious';

export const SearchBarPresenter = ({getSmartSeachState}) => {
    const state = useStateContext()
    const prevState = usePrevious(state)
    
    const [localState, setLocalState] = useState({})
    const prevLocalState = usePrevious(localState)

    /* Save the context state to the local state */
    useEffect(() => {
        if(state !== null && state !== prevState){
            setLocalState(state)
        }
        
    },[state, prevState, getSmartSeachState])

    /* Check if the local state is changed. If it has, then send the context data to the parent App consuming this module*/
    useEffect(() => {
        if( getSmartSeachState && (localState !== prevLocalState) ){
            return getSmartSeachState(localState)
        }
    },[localState, prevLocalState, getSmartSeachState])
 
    const handleIncrease = () => {
        state.dispatch({ type: 'increase' })
    }

    const handleDecrease = () => {
        state.dispatch({ type: 'decrease' })
    }

    return(
        <div id="smartsearch-searchbar-presenter">
           <div>
                <button onClick={()=> handleDecrease()}>DECREASE</button>
                <button onClick={()=> handleIncrease()}>INCREASE</button>
           </div>
        </div>
    );
}
