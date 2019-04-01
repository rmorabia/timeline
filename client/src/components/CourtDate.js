import React from 'react'

const CourtDate = (props) => {
  return (
    <div className="event">
      <h2>Court Date</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
      {props.event.attended ? <p>Attended</p> : <p>Not Attended</p>}
    </div>
  )
}

export default CourtDate
