import WorkersListItem from '../workers-list-item/workers-list-item';
import './workers-list.css';

const WorkersList = ({employees}) => {

    const elements = employees.map(employee => {
        return (
            <WorkersListItem {...employee}/>
        );
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default WorkersList;