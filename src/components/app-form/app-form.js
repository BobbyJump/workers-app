import './app-form.css';

const AppForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new Employee</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="His name?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary $" />

                <button type="submit"
                        className="btn btn-outline-light">Add New Employee</button>
            </form>
        </div>
    );
};

export default AppForm;