// Install axios project folder using cd command - npm install axios.         (STEP 1)

// Create a class component with rce.                                         (STEP 2)

// Import axios here.                                                         (STEP 3)

// We need create a state property, which will store the List of Posts - use 'rconst' snippet under 'class PostList extends Component' to add a ------ 
// constructor and a state property 'posts' - and initialized state property 'posts' to an empty array.    (STEP 4)

// We use Axios to make a 'GET' request to the JSONPlaceholder API. Where do we place the 'GET' request code, and the answer is in the ------------
// componentDidMount() lifeCycle method.   (STEP 5)

// In the componentDidMount() lifeCycle method, use the 'GET' request using the axios.get(url[, config]) method.    (STEP 6)

// Copy the url of the 'posts' under 'Routes' and paste it as string in the 'axios.get' request method.             (STEP 7)

// We have made a 'GET' request now. But how do we access the data. Axios is a good http request library. We can now add 'then' and 'catch' blocks -------
// 'then' accepts an arrow function as its argument, which gives us access to the response. Console is simply logged here   (STEP 8).

// Let us log error in the console for '.catch' - method in case there is an error.   (STEP 9)

// Save and open browser to inspect the console. You should see the imported the data in the console named 'Object'. Expand the 'data' field to see
// the actual list of imported data.   (STEP 10) 

// All that is left is to assign the data array seen in the console to the state property 'posts' and then render it in the JSX. --------- 
// this.setState({posts: response.data}).       (STEP 11)

// In the render method(), 
// We first of all destructure the state property - const { posts, errorMsg } = this.state 

// Display the list of posts using the map() method     (STEP 12)


// Finally, the component is configured to display error message in case API connection fails.    (STEP 13)


import React, { Component } from 'react'
import axios from 'axios'
import { Stack, Typography } from '@mui/material'



class PostList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/jobs/')
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Error retrieving data' })
      })

  }

  render() {
    const { posts, errorMsg } = this.state
    return (
      <Stack marginLeft={10} marginRight={10}>
        <Typography variant='h3' color={'secondary'} align='center'>
          List of Job Vacancies
          <Typography variant='h5' color={'primary'} align='left'>
            {
              posts.length ?
                posts.map(post => <div key={post.id}>
                  <a href="/applyjob"><h5>Job Title:  {post.job_title}</h5></a>
                  <h6>Job Description:  {post.job_description}</h6>
                  <h6>Job Location:  {post.job_location}</h6>
                  <h6>Job Salary:  {post.salary}</h6>
                  <h6>Date Posted:  {post.date_posted}</h6>
                  <h6>Deadline:  {post.expiry_date}</h6></div>) :
                null

            }
            {errorMsg ? <div> {errorMsg}</div> : null}
          </Typography>

        </Typography>
      </Stack>

    )
  }
}

export default PostList;