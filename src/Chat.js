import React, { Component } from 'react'
import ChatBox from './ChatBox'

const OpenRequest = ({ onClick }) => 
(
  <button className="accept" 
  onClick={onClick}>
    Volunteer!
  </button>
)

const MessageBox = ({ onClick, request }) => 
(
  <div className="M-Form">
  <CloseBox onClick={onClick} request={request} />
  </div>
)

const CloseBox = ({ onClick, request }) => {
console.log(request)
return(
  <div>
    <ChatBox request={request}/>
  <button className="Close" 
  onClick={onClick}>X</button>
  </div>
)
}
class Chat extends Component{
  constructor(){
    super()
    this.state={
      showMessage: false, 
    }

    this.boundShowMessage = this.showMessage.bind(this)
    this.boundHideMessage = this.hideMessage.bind(this)
  }

    showMessage() {
      this.setState({ showMessage: true })
    }

    hideMessage() {
      this.setState({ showMessage: false })
    }

    render(){

      return(
        <div>
          <OpenRequest onClick={this.boundShowMessage}/><MessageBox onClick={this.state.conversation}/>
          {this.state.showMessage && <ChatBox request={this.props.request}/>}
        </div>
      )
    }
}

export default Chat