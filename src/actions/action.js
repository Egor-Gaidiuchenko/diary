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