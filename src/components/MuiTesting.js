import React, { Component } from 'react'
import axios from 'axios'

class MuiTesting extends Component {
    state = {
        post: {},
        detailUser: {},
        asyncData: {},
        inputname: ''
    }
    getDetailUser(userId) {
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    detailUser: response.data
                })
            }).catch(err => {
                alert("Error get detail user : " + err)
            })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                this.setState({
                    post: response.data
                })
            })
    }
    render() {
        return (
            <div>
                <h2>GET HTTP REQUEST</h2>
                <p> Title : {this.state.post.title}</p>
                <p> Content : {this.state.post.body}</p>
                <button onClick={this.getDetailUser.bind(this, 1)}>Detail Author</button>
                <div>
                    {Object.entries(this.state.detailUser).length !== 0 && this.state.detailUser.constructor === Object &&
                        <div>
                            <p>Name : {this.state.detailUser.name}</p>
                            <p>Email : {this.state.detailUser.email}</p>
                            <p>Phone : {this.state.detailUser.phone}</p>
                            <p>Website : {this.state.detailUser.website}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default MuiTesting;