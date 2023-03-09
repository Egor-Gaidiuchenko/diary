import { useState } from "react"
import { useSelector } from "react-redux"
import { useHttp } from "../../hooks/useHttp"
import { useDispatch } from "react-redux"
import { noteCreated } from "../../actions/action"

const NotesAddForm = () => {

    const [noteTitle, setNoteTitle] = useState('')
    const [noteArticle, setNoteArticle] = useState('')
    const [notePrivate, setNotePrivate] = useState('')
    const notes = useSelector(state => state.notes)
    const request = useHttp()
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()

        const newNote = {
            id: notes.length + 1,
            title: noteTitle, 
            article: noteArticle, 
            private: notePrivate
        }

        request("http://localhost:3001/notes", 'POST', JSON.stringify(newNote))
            .then(res => res)
            .then(dispatch(noteCreated(newNote)))
            .catch(err => console.log(err))
            
        setNoteTitle(' ')
        setNoteArticle(' ')
        setNotePrivate(' ') 
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Title of note</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Note Title"
                    value={noteTitle}
                    onChange={e => setNoteTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Article</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Note Article"
                    style={{"height": '130px'}}
                    value={noteArticle}
                    onChange={e => setNoteArticle(e.target.value)}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choose privat settings</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={notePrivate}
                    onChange={e => setNotePrivate(e.target.value)}
                    >
                    <option>-</option>
                    <option>private</option>
                    <option>public</option>
                    <option>friends</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default NotesAddForm;