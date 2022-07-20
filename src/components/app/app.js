import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import AppForm from '../app-form/app-form';
import './app.css'

function App() {
    const employees = [
        {name: "John D.", salary: 1500, increase: false},
        {name: "Mark R.", salary: 900, increase: true},
        {name: "Adam B.", salary: 1800, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo number={employees.length}/>
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <WorkersList employees={employees}/>
            <AppForm />
        </div>
    );
}

export default App;