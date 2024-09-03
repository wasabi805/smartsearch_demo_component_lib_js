export const initialState = {
    metadata: [],
    classifications: [],
    source: 'PUBLIC'
}

export const docsReducer = (state = initialState,  action ) => {
    const actionTypes = {

        SET_SOURCE : (state, action)=>{
            return {
                ...state,
                source: action.payload.source
            }
        },

        SET_TEST : (state, action)=>{
            return{
                ...state,
                source : action.payload.source
            }
        }
    }

    const actionCase = action.type
    return actionCase in actionTypes ? actionTypes[actionCase]( state, action ) : state
}