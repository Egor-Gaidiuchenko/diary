import NotesItem from "../notesItem/notesItem";
import { useHttp } from "../../hooks/useHttp";
import { notesFetched, noteDeleted, notesLoading } from "../../actions/action"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Spinner from "../../spinner/Spinner"


const NotesList = () => {

    const {filtredNotes, loadingStatus} = useSelector(state => state)
    const request = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(notesLoading())
        request("http://localhost:3001/notes")
            .then(data => dispatch(notesFetched(data)))
            .catch(() => console.log('error'))

        // eslint-disable-next-line
    }, [])

    const onDelete = (id) => {
        request(`http://localhost:3001/notes/${id}`, 'DELETE')
            .then(data => data)
            .then(dispatch(noteDeleted(id)))
    }

    const renderNotesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">There is no notes yet</h5>
        }

        return arr.map(({id, ...props}) => {

            return <NotesItem key={id} {...props} onDelete={() => onDelete(id)}/>
            
        })        
    }

    if (loadingStatus === 'loading') {
        return <Spinner/>
    }

    const elements = renderNotesList(filtredNotes) 

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default NotesList;