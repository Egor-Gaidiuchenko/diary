const NotesFilters = () => {
    return (
        <div className="card shadow-lg mt-4">
        <div className="card-body">
            <p className="card-text">Filter privat status</p>
            <div className="btn-group">
                <button className="btn btn-primary">Privat</button>
                <button className="btn btn-danger">Public</button>
            </div>
        </div>
    </div>
    )
}

export default NotesFilters;