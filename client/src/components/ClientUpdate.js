import React, { Component } from 'react'

class ClientUpdate extends Component {
  render() {
    return (
      <div className="event">
        <h2>Client Data Updated</h2>
        <p className="date">{this.props.date(this.props.event.date)}</p>
      </div>
    )
  }
}

export default ClientUpdate
