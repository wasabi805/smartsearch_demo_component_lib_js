const userDataReducer = ( state = initialState , action )   => {
    switch (action.type) {
        case 'name':
            return{
                ...state,
                firstName : action.payload.firstName
            }
        default:
            return state
    }
}

export default userDataReducer

export const initialState = {
    id: 0,
    firstName : 'Tim'
};