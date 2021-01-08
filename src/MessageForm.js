import React, { Component } from 'react';
import axios from 'axios';

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {       
    body: "",
    to_id: "",
    from_id: ""
};
}

handleChange = (event) => {
const {name, value} = event.target
this.setState({
  [name]: value
})
};

handleSubmit = (event) => {
event.preventDefault()
const {message, to_id, from_id} = this.state
let messages = {
  message: message,
  to_id: to_id,
  from_id: from_id
}

    axios.post("http://localhost:3003/messages", {messages},
    { withCredentials: true }
    )
    .then(response => {
        if (response.data.status === 'created') {
        this.props.chats(response.data);            
    }
})        
    .catch(error => {
        console.log("request error", error);
    });
    event.preventDefault();
};
  



  render() {
    return (
      <div className="MessageDoc">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="body"
            placeholder="message"
            value={this.state.body}
            onChange={this.handleChange}
            required
          />

          <br />

          <button type="submit">Send</button>

        </form>
      </div>
    );
  }
}

export default MessageForm;