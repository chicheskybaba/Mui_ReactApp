import React, { Component } from 'react';
import axios from 'axios';

class Postlist extends Component {
    state = {
        post: {},
        detailUser: {},
        asyncData: {},
        inputname: ''
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


    render() {
        return (
            <div>

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

            </div>
        )
    }
}

export default Postlist;