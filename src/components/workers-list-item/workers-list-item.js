import './workers-list-item.css';

const WorkersListItem = (props) => {
    const { name, salary, onDelete, onToggleProperties, increase, like } = props;

    return (
        <li className={`${increase ? 'increase' : ''} ${like ? 'like' : ''} list-group-item d-flex justify-content-between`}>
            <span className="list-group-item-label"
                onClick={onToggleProperties}
                data-toggle="like">
                    {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProperties}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default WorkersListItem;