import React, { Component } from 'react'

export default class UserInfoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {user: {}};
    }

    // this is a special lifecycle event method, run after rendering
    // fetch from backend, then convert to json then set it as state
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => response.json()).then(data => {
            this.setState({user: data});
        });
    }

    render() {
        return (
            <div>
                <h2>Username: {this.state.user.name}</h2>
                <h2>Email: {this.state.user.email}</h2>
            </div>
        )
    }
}
