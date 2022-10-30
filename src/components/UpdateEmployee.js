import React from 'react';
import axios from 'axios';

export default class UpdateEmployee extends React.Component {
    state = {
        status: "",
        employee_name: "",
        employee_salary: "",
        employee_age: ""
    }

    handleUpdate = () => {
        const { employee_name, employee_salary, employee_age } = this.state;

        axios.put(`http://dummy.restapiexample.com/api/v1/update/5/`, {
            employee_name: { employee_name },
            employee_salary: { employee_salary },
            employee_age: { employee_age }
        })
            .then(response => {
                this.setState({ status: response.status });
            })
    }

    render() {
        const { status, employee_name, employee_salary, employee_age } = this.state;
        return (
            <div>
                <h4>Axios PUT Request Example in React</h4>

                <input type="text" name="employee_name" value={employee_name} />
                <input type="text" name="employee_salary" value={employee_salary} />
                <input type="number" name="employee_age" value={employee_age} />

                <input type="button" name="update" value="Update" onClick={this.handleUpdate} />

                {status && status}
            </div>
        )
    }
}