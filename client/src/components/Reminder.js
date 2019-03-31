import React, { Component } from 'react'

class Reminder extends Component {
  render() {
    return (
      <div className="event">
        <h2>Reminder for Court Date</h2>
        <p className="date">{this.props.date(this.props.event.date)}</p>
        <p className="quote">{this.props.event.text}</p>
      </div>
    )
  }
}

export default Reminder
