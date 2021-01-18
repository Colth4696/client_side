import React, { Component } from "react"
import MyMapComponent from "../../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "./Counter"
import Footer from "../../Footer"


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      users: [], requests: [], messages: []
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <AccordionMenu requests={this.state.requests} messages={this.state.messages} />
        <MyMapComponent requests={this.props.requests} user={this.props.user} />
        <Counter requests={this.state.requests} user={this.props.user} />
        <Footer />
      </div>

    );
  }
}

export default Dashboard; 