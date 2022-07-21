import { Component } from 'react';
import './app-form.css';

class AppForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
        };
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);

        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new Employee</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        required
                        className="form-control new-post-label"
                        placeholder="His name?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        required
                        className="form-control new-post-label"
                        placeholder="Salary $"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">
                                Add New Employee
                    </button>
                </form>
            </div>
        );
    }
}

export default AppForm;