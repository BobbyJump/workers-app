
import './app-info.css';

const AppInfo = ({number, increase}) => {
    return(
        <div className="app-info">
            <h1>Accounting for employees in the company.</h1>
            <h2>Total number of employees: {number}</h2>
            <h2>Number of employees receiving bonuses: {increase}</h2>
        </div>
    );
};

export default AppInfo;