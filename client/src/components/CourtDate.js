import React from 'react'

const CourtDate = (props) => {
  return (
    <div className="event">
      <h2>Court Date</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
      {props.event.past ? props.event.attended ? <p>Attended</p> : <p>Not Attended</p> : null}
    </div>
  )
}

export default CourtDate
