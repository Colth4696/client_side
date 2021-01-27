import React, { Component } from 'react'
import ChatBox from './ChatBox'




// const CloseBox = ({ request }) => {
// console.log(request)
// return(
//   <div>
//     <Chatbox request={request}/>
//   </div>
// )
// }
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
          {/* <OpenRequest onClick={this.boundShowMessage}/> */}
          <ChatBox request={this.props.request} volunteer={this.props.volunteer} chatroom={this.props.chatroom}/>
          {this.state.showMessage }
        </div>
      )
    }
}

export default Chat