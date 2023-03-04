const initialState = {
    notes: [],
    private: 'all'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NOTES_FETCHED':
            return {
                ...state,
                notes: action.payload
            }
        case 'NOTE_DELETED':
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.payload)
            }
        default: return state;
    }

}

export default reducer;