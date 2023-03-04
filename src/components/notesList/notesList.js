import NotesItem from "../notesItem/notesItem";
import { useHttp } from "../../hooks/useHttp";
import { notesFetched, noteDeleted } from "../../actions/action"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


const NotesList = () => {

    const {notes} = useSelector(state => state)
    const request = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        request("http://localhost:3001/notes")
            .then(data => dispatch(notesFetched(data)))
            .catch(() => console.log('error'))

        // eslint-disable-next-line
    }, [])

    const onDelete = (id) => {
        request(`http://localhost:3001/notes/${id}`, 'DELETE')
            .then(data => console.log(data))
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

    const elements = renderNotesList(notes) 



    return (
        <ul>
            {elements}

        </ul>
    )
}

export default NotesList;