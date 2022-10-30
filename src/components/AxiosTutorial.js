import React, { Component } from 'react';
import axios from 'axios';

class AxiosTutorial extends Component {
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

    handleChange = event => {
        this.setState({ inputname: event.target.value });
    }

    postSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.inputname
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
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
                <hr />
                <h2>POST HTTP  REQUEST</h2>
                <div>
                    <form onSubmit={this.postSubmit}>
                        <label>
                            New Name:
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Submit User</button>
                    </form>
                </div>
                <hr />
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

export default AxiosTutorial;