import React, { Component } from 'react';
import axios from 'axios';

class Getlist extends Component {
    state = {
        post: {},
        detailUser: {},
        asyncData: {},
        inputname: ''
    }
    async allData() {
        try {
            const getPost = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
            this.setState({
                asyncData: {
                    title: getPost.data.title,
                    content: getPost.data.body
                }
            })
            console.log(getPost);
            const getUser = await axios.get('https://jsonplaceholder.typicode.com/users/' + getPost.data.userId)
            console.log(getUser);
            let objuser = this.state.asyncData;
            objuser.name = getUser.data.name;
            objuser.email = getUser.data.email
            this.setState({
                asyncData: objuser
            })
        } catch (error) {
            alert("error" + error)
        }
    }

    render() {
        return (
            <div>

                <h2>ASYNC - AWAIT</h2>
                <button onClick={this.allData.bind(this)}>Reload Data</button>
                <p><strong>Title</strong> : {this.state.asyncData.title}</p>
                <p><strong>Content</strong> : {this.state.asyncData.content}</p>
                <p><strong>Author</strong> : {this.state.asyncData.name}</p>
                <p><strong>Email</strong> : {this.state.asyncData.email}</p>
            </div>
        )
    }
}

export default Getlist;