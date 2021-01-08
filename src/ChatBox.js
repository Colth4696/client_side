import React, { Component } from 'react'
import axios from 'axios'

class ChatBox extends Component {
  constructor() {
    super()
    this.state = { 
      content: "",
      sender_id: "",
      receiver_id: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit= (event) => {
    event.preventDefault()
    const { content, sender_id, receiver_id } = this.state
    let message = {
      content: content,
      sender_id: sender_id,
      receiver_id: receiver_id
    }

    axios.post("http://localhost:3003/messages", { message },
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

  getConvo= (event) => {
    event.preventDefault()
    axios.get("http://localhost:3003/conversations")
    .then(response => {
      console.log(response.data)
      this.setState({ conversations: response.data.conversations });
    })
}

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="content"
        placeholder="message"
        value={this.state.content}
        onChange={this.handleChange}
        required />
        
        <br />

        <input
        type="integer"
        name="conversation_id"
        placeholder="conversation_id"
        value={this.state.conversation_id}
        onChange={this.getConvo}
        required />

        <button type="submit">Send</button>
      </form>
      </div>
    )
  }
}

export default ChatBox