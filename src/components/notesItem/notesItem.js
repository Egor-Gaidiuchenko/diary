const NotesItem = ({title, article, onDelete}) => {
    return (
        <li className={'card flex-row mb-4 shadow-lg text-white bg-secondary bg-gradient'}>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{article}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" className="btn-close btn-close" aria-label="Close" onClick={() => onDelete()}></button>
            </span>
        </li>
    )
}

export default NotesItem;