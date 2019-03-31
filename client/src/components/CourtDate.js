import React, { Component } from 'react'

class CourtDate extends Component {
  render() {
    return (
      <div className="event">
        <h2>Court Date</h2>
        <p className="date">{this.props.date(this.props.event.date)}</p>
        {this.props.event.attended ? <p>Attended</p> : <p>Not Attended</p>}
      </div>
    )
  }
}

export default CourtDate
