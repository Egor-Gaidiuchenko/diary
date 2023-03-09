export const notesFetched = (notes) => {
    return {
        type: 'NOTES_FETCHED',
        payload: notes
    }
}

export const noteDeleted = (id) => {
    return {
        type: 'NOTE_DELETED',
        payload: id
    }
}

export const noteCreated = (newNote) => {
    return {
        type: 'NOTE_CREATED',
        payload: newNote
    }
}

export const notesFiltred = (filter) => {
    return {
        type: 'NOTES_FILTRED', 
        payload: filter
    }
}

export const notesLoading = () => {
    return {
        type: 'NOTES_LOADING'
    }
}