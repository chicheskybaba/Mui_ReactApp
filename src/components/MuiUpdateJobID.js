// Install axios project folder using cd command - npm install axios.         (STEP 1)

// Create a class component with rce.                                         (STEP 2)

// Import axios here.                                                         (STEP 3)



import React, { Component } from 'react'
import axios from 'axios'
import { Button, TextField, Stack, Typography } from '@mui/material'


class MuiAddJob extends Component {     // use rce snippet to generate class base constructor element.  
    constructor(props) {
        super(props)
        // let us set our state variables now
        this.state = {
            id: '',
            job_title: '',
            job_description: '',
            job_location: '',
            salary: '',
            date_posted: '',
            expiry_date: '',
            completed: '',
            posted_by: '',
            successMsg: '',
            errorMsg: '',

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .put('http://127.0.0.1:8000/api/jobs/1/', this.state)   // .post accepts two arguments - the urls that will receive post and the data (which is the state objects - 'this state')
            .then(response => {
                console.log(response)      // let us log response into the console if successful.
                this.setState({ successMsg: 'Job Successfully Updated to the Database' })
            })
            .catch(error => {
                console.log(error)        // Also, we log error in the console if error.
                this.setState({ errorMsg: 'Job Not Correctly Updated to the Database' })
            })
    }

    render() {
        const { id, job_title, job_description, job_location, salary, date_posted, expiry_date, completed, posted_by, errorMsg, successMsg } = this.state    // We destructure the state variables here. Also, each of the state variables is assigned to the value of its field. Pls take note.
        return (                                     // The following are MUI-TextFields and MUI-Button for data input and submission. 
            <Stack marginBottom={5} textAlign='center' justifyItems={'left'}>
                <form onSubmit={this.submitHandler}>
                    <Typography variant='h3' color={'secondary'}>Update the Advertised Job Vacancy</Typography>

                    <Stack marginTop={5} marginBottom={5} size='small' marginX={50} alignSelf='left'>
                        <TextField type="text" variant='filled' label='id' size='small' name="id" value={id} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Job Title' size='small' name="job_title" value={job_title} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField multiline type="text" variant='filled' label='Job Description' size='small' name="job_description" value={job_description} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Job Location' size='small' name="job_location" value={job_location} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Salary' size='small' name="salary" value={salary} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Date Posted' size='small' name="date_posted" value={date_posted} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Deadline' size='small' name="expiry_date" value={expiry_date} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Completed' size='small' name="completed" value={completed} onChange={this.changeHandler} />
                    </Stack>
                    <Stack marginTop={5} marginBottom={5} marginX={50}>
                        <TextField type="text" variant='filled' label='Posted By' size='small' name="posted_by" value={posted_by} onChange={this.changeHandler} />
                    </Stack>



                    <Button variant='contained' type="submit">Submit</Button>

                    {errorMsg ? <div> {errorMsg}</div> : null}
                    {successMsg ? <div> {successMsg}</div> : null}


                </form>
            </Stack>
        )
    }
}

export default MuiAddJob;
