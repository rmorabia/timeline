import React, { Component } from 'react'

class CaseAppt extends Component {

  date() {
    const date = this.props.event.date
    return Date(date)
  }

  render() {
    return (
      <div className="event">
        <h2>Case Manager Appointment</h2>
        <p className="date">{this.props.date(this.props.event.date)}</p>
        {this.props.event.attended ? <p>Attended</p> : <p>Not Attended</p>}
      </div>
    )
  }
}

export default CaseAppt
