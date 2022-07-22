import './app-filter.css';

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'All Employees'},
        {name: 'increase', label: 'For Promotion'},
        {name: 'moreThan1000', label: 'Salary Over $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const classNames = active ? "btn btn-light" : "btn btn-outline-light";

        return (
            <button className={classNames}
                    type="button"
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;