import React from 'react'

const CaseAppt = (props) => {
  return (
    <div className="event">
      <h2>Case Manager Appointment</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
      {props.event.attended ? <p>Attended</p> : <p>Not Attended</p>}
    </div>
  )
}

export default CaseAppt
