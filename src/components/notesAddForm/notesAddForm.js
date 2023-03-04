const NotesAddForm = () => {
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Title of note</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Article</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choose privat settings</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    >
                    <option>Privat</option>
                    <option>Public</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default NotesAddForm;