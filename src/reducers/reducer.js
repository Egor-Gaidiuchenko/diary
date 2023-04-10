const initialState = {
    loadingStatus: 'idle',
    notes: [],
    filter: 'all',
    filtredNotes: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NOTES_FETCHED':
            return {
                ...state,
                loadingStatus: 'idle',
                notes: action.payload,
                filtredNotes: state.filter === 'all' ?
                              action.payload : 
                              action.payload.filter(item => item.privat === state.filter)
            }
        case 'NOTE_DELETED':
            return {
                ...state,
                loadingStatus: 'idle',
                notes: state.notes.filter(item => item.id !== action.payload),
                filtredNotes: state.filter === 'all' ?
                              state.notes.filter(item => item.id !== action.payload) : 
                              state.notes.filter(item => item.id !== action.payload && item.privat === state.filter)
            }
        case 'NOTE_CREATED':
            return {
                ...state,
                loadingStatus: 'idle',
                notes: [...state.notes, action.payload],
                filtredNotes: state.filter === 'all' ? 
                              [...state.notes, action.payload] : 
                              [...state.notes, action.payload].filter(item => item.privat === state.filter)
            }
        case 'NOTES_FILTRED': 
            return {
                ...state,
                loadingStatus: 'idle',
                filter: action.payload,
                filtredNotes: action.payload === 'all' ?
                              state.notes : 
                              state.notes.filter(item => item.privat === action.payload)
            }
        case 'NOTES_LOADING': 
            return {
                ...state, 
                loadingStatus: 'loading'
            }
        default: return state;
    }

}

export default reducer;