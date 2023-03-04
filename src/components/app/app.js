import NotesAddForm from "../notesAddForm/notesAddForm";
import NotesList from "../notesList/notesList";
import NotesFilters from "../notesFilters/notesFilters";

const App = () => {
    return (
        <main className="app">
            <div className="content">
                <NotesList/>
                <div className="content__interactive">
                    <NotesAddForm/>
                    <NotesFilters/>
                </div>
            </div>
        </main>
    )
}

export default App;