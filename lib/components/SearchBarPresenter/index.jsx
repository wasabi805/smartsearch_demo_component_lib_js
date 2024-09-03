
import { useStateContext } from "../../context/stateContext";

export const SearchBarPresenter = () => {
    const state = useStateContext()

    console.log('what is in state', state.counterState)

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
