import React from 'react'

const Reminder = (props) => {
  return (
    <div className="event">
      <h2>Reminder for Movie Date</h2>
      <p className="date">{props.formatDate(props.event.date)}</p>
      <p className="quote">{props.event.text}</p>
    </div>
  )
}

export default Reminder
