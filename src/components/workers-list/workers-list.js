import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css';

const WorkersList = ({employees, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = employees.map(employee => {
        const {id, ...restProps} = employee;
        return (
            <WorkersListItem 
                key={id} 
                {...restProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleLike={() => onToggleLike(id)}/>
        );
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default WorkersList;