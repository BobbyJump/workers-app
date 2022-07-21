import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import AppForm from '../app-form/app-form';
import './app.css'

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            employees: [
                {name: "John D.", salary: 1500, increase: false, id: 1},
                {name: "Mark R.", salary: 900, increase: true, id: 2},
                {name: "Adam B.", salary: 1800, increase: false, id: 3},
            ],
        }
    }

    deleteItem = id => {
        this.setState(({employees}) => ({
                employees: employees.filter(item => item.id !== id),
        }))
    }

    render() {
        const { employees } = this.state;

        return (
            <div className="app">
                <AppInfo number={employees.length}/>
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <WorkersList 
                    employees={employees}
                    onDelete={this.deleteItem}/>
                <AppForm />
            </div>
        );
    }
}

export default App;