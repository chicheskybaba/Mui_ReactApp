// Install axios project folder using cd command - npm install axios.         (STEP 1)

// Create a class component with rce.                                         (STEP 2)

// Import axios here.                                                         (STEP 3)



import React, { Component } from 'react'
import axios from 'axios'
import { Button, TextField, Stack } from '@mui/material'


class PostForm extends Component {     // use rce snippet to generate class base constructor element.  
	constructor(props) {
		super(props)
// let us set our state variables now
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)   // .post accepts two arguments - the urls that will receive post and the data (which is the state objects - 'this state')
			.then(response => {
				console.log(response)      // let us log response into the console if successful.
			})
			.catch(error => {
				console.log(error)        // Also, we log error in the console if error.
			})
	}

	render() {
		const { userId, title, body } = this.state    // We destructure the state variables here. Also, each of the state variables is assigned to the value of its field. Pls take note.
		return (                                     // The following are MUI-TextFields and MUI-Button for data input and submission. 
			<div>
				<form onSubmit={this.submitHandler}> 
					<Stack marginTop={5}>
						<TextField type="text" size='small' name="userId" value={userId} onChange={this.changeHandler}/>   
					</Stack>
					<Stack marginTop={5}>
						<TextField type="text" size='small' name="title" value={title} onChange={this.changeHandler}/>
					</Stack>
					<Stack marginTop={5} marginBottom={5}>
						<TextField type="text" size='small' name="body" value={body} onChange={this.changeHandler}/>
					</Stack>
					
          <Button variant='contained' type="submit">Submit</Button>
				</form>
			</div>
		)
	}
}

export default PostForm;
