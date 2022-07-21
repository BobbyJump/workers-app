import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css';

const WorkersList = ({employees, onDelete, onToggleProperties }) => {

    const elements = employees.map(employee => {
        const {id, ...restProps} = employee;
        return (
            <WorkersListItem 
                key={id} 
                {...restProps}
                onDelete={() => onDelete(id)}
                onToggleProperties={e => onToggleProperties(id, e.currentTarget.getAttribute('data-toggle'))}/>
        );
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default WorkersList;