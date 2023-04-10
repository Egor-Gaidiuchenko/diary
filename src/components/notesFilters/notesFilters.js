import { useDispatch } from "react-redux";
import { notesFiltred } from "../../actions/action";

const NotesFilters = () => {

    const dispatch = useDispatch();

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter privat status</p>
                <div className="btn-group">
                    <button className="btn btn-success" onClick={() => dispatch(notesFiltred('all'))}>All</button>
                    <button className="btn btn-primary" onClick={() => dispatch(notesFiltred('privat'))}>Privat</button>
                    <button className="btn btn-danger" onClick={() => dispatch(notesFiltred('public'))}>Public</button>
                    <button className="btn btn-secondary" onClick={() => dispatch(notesFiltred('friends'))}>Friends</button>
                </div>
            </div>
        </div>
    )
}

export default NotesFilters;