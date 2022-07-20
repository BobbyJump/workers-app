import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css';

const WorkersList = ({employees}) => {

    const elements = employees.map(employee => {
        const {id, ...restProps} = employee;
        return (
            <WorkersListItem key={id} {...restProps}/>
        );
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default WorkersList;