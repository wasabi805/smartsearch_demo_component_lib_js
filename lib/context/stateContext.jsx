import React, { createContext, useCallback, useContext, useReducer } from 'react';
import { initialState as docsInitialState, docsReducer } from '../reducers/docsReducer';
import { initialState as counterInitialState, counterReduer} from '../reducers/counterReduer';
import userDataReducer, { initialState as usersInitialState } from '../reducers/userDataReducer';

const StateContext = createContext(null);

export const StateProvider = ({ children }) => {
    
    const [ docsState,  setDocsState ] = useReducer(docsReducer, docsInitialState);
    const [ userState, setUserState ] = useReducer(userDataReducer, usersInitialState);  
    const [counterState, setCounterState] = useReducer(counterReduer, counterInitialState)

    const combinedState = React.useMemo(() => ({ docsState, userState, counterState}), [docsState, userState, counterState]);
    const combineDispatch  = (...dispatches ) => ( action ) =>
        dispatches.forEach((dispatch) => dispatch( action) );

    const dispatch = useCallback(
      combineDispatch(
        setDocsState, 
        setUserState,
        setCounterState,
        ), 
        
        [ setDocsState, 
          setUserState,
          setCounterState,
        ]);
    
// In this return value, we passed-in children as the CONSUMER of the PROVIDER
// This will able children components to access the data inside the context
  return (
    <StateContext.Provider value={{ ...combinedState, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Create a function that invokes the context 
export const useStateContext = () => {
  return useContext(StateContext)
}