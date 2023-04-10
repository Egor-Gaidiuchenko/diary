const NotesItem = ({title, article, privat, onDelete}) => {
    
    let backgroundClass = ""

    if (privat === "privat") {
        backgroundClass = "bg-primary"
    } else if (privat === "public") {
        backgroundClass = "bg-danger"
    } else if (privat === "friends") {
        backgroundClass = "bg-secondary"
    }

    return (
        <li className={`card flex-row mb-4 shadow-lg text-white bg-gradient ${backgroundClass}`}>
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