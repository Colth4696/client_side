import React, { Component } from 'react'
import axios from 'axios'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3003/requests")
        .then(response => {
            console.log(response.data)
            this.setState({ requests: response.data.requests });
          })
    }

    render() {

        const {error, requests } = this.state;

        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
        return (
            <div>
                <h1>
                    Available Tasks: 
                </h1>
                {requests.map(request => <div>{request.id}</div>)}
            </div>
        )
        }
    }
}

export default Counter