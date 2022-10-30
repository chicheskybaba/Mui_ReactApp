import React, { Component } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'


class DeleteJob extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jobs: [],

        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/jobs/`)
            .then(res => {
                const jobs = res.data;
                this.setState({ jobs });
            })
    }

    deleteRow(id, e) {
        axios.delete(`http://127.0.0.1:8000/api/jobs/${id}/`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                const jobs = this.state.jobs.filter(item => item.id !== id);
                this.setState({ jobs });
            })

    }


    render() {
        return (
            <div>
                <Typography variant='h4' color={'secondary'} marginBottom={5}>Delete Expired Job Advertisements</Typography>

                <table className="table table-bordered">
                    <Typography marginLeft={15} color={'primary'}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Job Title</th>
                                <th>Job Location</th>
                                <th>Salary</th>
                                <th>Date Posted</th>
                                <th>Expiry Date</th>
                                <th>Posted By</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.jobs.map((job) => (
                                <tr>
                                    <td>{job.id}</td>
                                    <td>{job.job_title}</td>
                                    <td>{job.job_location}</td>
                                    <td>{job.salary}</td>
                                    <td>{job.date_posted}</td>
                                    <td>{job.expiry_date}</td>
                                    <td>{job.posted_by}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={(e) => this.deleteRow(job.id, e)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Typography>

                </table>
            </div>
        )
    }
}

export default DeleteJob;